import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

import {StaticService} from '../lib/service/static'

@Injectable()
export class MenuService {

    constructor (private http: Http,
                 private staticService: StaticService){
    }

    private session = this.staticService.makeApi('session')

    logout ():Observable<any> {
        return this.http.delete(this.session, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    getVideo (videoLink):Observable<any> {
        return this.http.get(videoLink)
            .map((res: Response) => res || {})
            .catch(this.handleError)
    }

    private handleError (error: any){
        return Observable.throw(error || '服务器错误')
    }

}
