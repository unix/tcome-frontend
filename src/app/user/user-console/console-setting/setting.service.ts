import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Headers, RequestOptions} from '@angular/http'
import 'rxjs/Rx'

import {StaticService} from '../../../shared/service/static'

@Injectable()
export class SettingService {

    constructor (
        private http: Http,
        private staticService: StaticService
    ){
    }

    private user = this.staticService.makeApi('user')
    private image = this.staticService.makeApi('image')

    getUser (): Observable<any> {
        return this.http.get(this.user, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    upload (image): Observable<any> {
        return this.http.post(this.image, image, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    changeUser (user): Observable<any> {
        return this.http.put(this.user, user, this.staticService.options())
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
