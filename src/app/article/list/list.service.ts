import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/observable/throw'

import {List} from './list'
import {StaticService} from '../../shared/service/static'

@Injectable()
export class ListService {

    constructor (
        private http: Http,
        private staticService: StaticService){
    }

    private listUrl = this.staticService.makeApi('articles')

    getList (): Observable<List[]>{
        return this.http.get(this.listUrl)
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    private handleError (error: any){
        return Observable.throw(error || '服务器错误')
    }


}
