import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Headers, RequestOptions} from '@angular/http'
import 'rxjs/Rx'

import {Subject} from './subject'
import {StaticService} from '../../../shared/service/static'

@Injectable()
export class ConsoleSubjectService {

    constructor (
        private http: Http,
        private staticService: StaticService
    ){
    }

    private listUrl = this.staticService.makeApi('users')

    getList (id): Observable<Subject[]>{
        return this.http.get(`${this.listUrl}/${id}/article`)
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }

    private handleError (error: any){
        if(error instanceof Response) {
            return Observable.throw(error.json().message || '服务器错误');
        }
        return Observable.throw(error || '服务器错误')
    }

}
