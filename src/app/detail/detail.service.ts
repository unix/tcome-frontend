import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

import {StaticService} from '../lib/service/static'
import {Detail} from './detail'
import {Comment} from './comment'

@Injectable()
export class DetailService {

    constructor(private http: Http,
                private staticService: StaticService) {
    }

    private detailUrl = this.staticService.makeApi('articles')

    getDetail (id: string): Observable<Detail> {
        return this.http.get(`${this.detailUrl}/${id}`, this.staticService.options)
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    getComment (id: string): Observable<Comment[]> {
        return this.http.get(`${this.detailUrl}/${id}/comment`, this.staticService.options)
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    postComment (id: string, content: any): Observable<Comment> {
        return this.http.post(`${this.detailUrl}/${id}/comment`, content, this.staticService.options)
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }

    private handleError (error: any){
        if(error instanceof Response) {
            return Observable.throw(error.status || '服务器错误');
        }
        return Observable.throw(error || '服务器错误')
    }


}
