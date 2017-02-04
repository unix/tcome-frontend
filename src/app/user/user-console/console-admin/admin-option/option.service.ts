import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

import {Option} from './option'
import {StaticService} from '../../../../shared/service/static'

@Injectable()
export class OptionService {

    constructor (private http: Http,
                 private staticService: StaticService){
    }

    private optionUrl = this.staticService.makeApi('option')

    getOption (): Observable<Option>{
        return this.http.get(`${this.optionUrl}`, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    changeOption (option): Observable<Option>{
        return this.http.put(`${this.optionUrl}`, option, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }

    private handleError (error: any){
        return Observable.throw(error || '服务器错误')
    }

}
