import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

import {List} from './list'
import {StaticService} from '../../../shared/service/static'

@Injectable()
export class CheckService {

    constructor (private http: Http,
                 private staticService: StaticService){
    }

    private reviewUrl = this.staticService.makeApi('reviews')

    getList (status:string = 'all'): Observable<List[]>{
        return this.http.get(`${this.reviewUrl}?status=${status}`, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    checkArticle (id, status): Observable<any>{
        return this.http.put(`${this.reviewUrl}/${id}/${status}`, {}, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }

    private handleError (error: any){
        return Observable.throw(error || '服务器错误')
    }


}
