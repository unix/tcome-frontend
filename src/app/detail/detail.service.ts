import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

import {StaticService} from '../lib/service/static'
import {Detail} from './detail'

@Injectable()
export class DetailService {

    constructor(private http: Http,
                private staticService: StaticService) {
    }

    private detailUrl = this.staticService.makeApi('articles')
    private options = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    })

    getDetail (id: string): Observable<Detail> {
        return this.http.get(`${this.detailUrl}/${id}`, this.options)
            .map(this.extractData)
            .catch(this.handleError)
    }


    private extractData(res: Response) {
        const body = res.json()
        return body || {}
    }

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.json().message || '服务器错误');
        }
        return Observable.throw(error || '服务器错误')
    }

}
