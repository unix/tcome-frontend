import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Headers, RequestOptions} from '@angular/http'
import 'rxjs/Rx'

import {Articles} from './articles'
import {StaticService} from '../shared/service/static'

@Injectable()
export class SearchService {

    constructor (
        private http: Http,
        private staticService: StaticService
    ){
    }

    private searchLink = this.staticService.makeApi('articles')

    search (word): Observable<Articles[]>{
        console.log(word);
        return this.http.get(`${this.searchLink}/${word}/search`)
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }

    private handleError (error: any){
        return Observable.throw(error || '服务器错误')
    }

}
