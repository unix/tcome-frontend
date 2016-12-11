import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Headers, RequestOptions} from '@angular/http'

import {StaticService} from '../lib/service/static'
import {User} from './user'

@Injectable()
export class LoginService {

    constructor (private http: Http,
                 private staticService: StaticService){
    }

    private session = this.staticService.makeApi('session')

    getList (member: any): Observable<User[]>{
        return this.http.post(this.session, member, this.staticService.options)
            .map(this.staticService.extractData)
            .catch(this.staticService.handleError)
    }

}
