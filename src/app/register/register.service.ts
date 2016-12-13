import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

import {StaticService} from '../lib/service/static'
import {User} from './user'

@Injectable()
export class RegisterService {

    constructor (
        private http: Http,
        private staticService: StaticService
    ){
    }

    private user = this.staticService.makeApi('user')

    register (member: any): Observable<any>{
        return this.http.post(this.user, member, this.staticService.options)
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }

    private handleError (error: any){
        if (error instanceof Response){
            return Observable.throw(error.json().message || '服务器错误');
        }
        return Observable.throw(error || '服务器错误')
    }

}
