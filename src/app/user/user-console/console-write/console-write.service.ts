import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Headers, RequestOptions} from '@angular/http'
import 'rxjs/Rx'

import {StaticService} from '../../../shared/service/static'

@Injectable()
export class ConsoleWriteService {

    constructor (
        private http: Http,
        private staticService: StaticService
    ){
    }

    private article = this.staticService.makeApi('article')
    private articles = this.staticService.makeApi('articles')
    private image = this.staticService.makeApi('image')

    upload (image): Observable<any> {
        return this.http.post(this.image, image, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    create (article: any): Observable<any>{
        return this.http.post(this.article, article, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    update (article: any, id: string): Observable<any>{
        return this.http.put(`${this.articles}/${id}`, article, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    getArticleDetail (id: string): Observable<any> {
            return this.http.get(`${this.articles}/${id}`)
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
