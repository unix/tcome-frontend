import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

import {StaticService} from '../shared/service/static'
import {Option} from './option'

@Injectable()
export class HomeService {

  constructor (private http: Http,
               private staticService: StaticService){
  }

  private optionLink = this.staticService.makeApi('option')

  getOption ():Observable<Option> {
    return this.http.get(this.optionLink)
        .map(this.staticService.extractData)
        .catch(this.handleError)
  }

  private handleError (error: any){
    return Observable.throw(error || '服务器错误')
  }

}
