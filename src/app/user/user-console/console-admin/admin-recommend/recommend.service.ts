import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

import {Option} from './option'
import {List} from './list'
import {StaticService} from '../../../../shared/service/static'

@Injectable()
export class RecommendService {

    constructor (private http: Http,
                 private staticService: StaticService){
    }

    private optionUrl = this.staticService.makeApi('option')
    private searchUrl = this.staticService.makeApi('articles')

    getOption (): Observable<Option>{
        return this.http.get(`${this.optionUrl}`, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }
    search (keyWord: string = 'allArticles'): Observable<List[]>{
        console.log(123);
        return this.http.get(`${this.searchUrl}/${keyWord}/search`, this.staticService.options())
            .map(res =>{
                if (res.status != 204) return res.json().slice(0, 5)
                return []
            })
            .catch(this.handleError)
    }
    changeOption (option): Observable<any>{
        return this.http.put(`${this.optionUrl}`, option, this.staticService.options())
            .map(this.staticService.extractData)
            .catch(this.handleError)
    }

    private handleError (error: any){
        return Observable.throw(error || '服务器错误')
    }

}
