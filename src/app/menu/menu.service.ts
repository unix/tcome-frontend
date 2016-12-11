import {Injectable} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

import {StaticService} from '../lib/service/static'

@Injectable()
export class MenuService {

    constructor (
        private http: Http,
        private staticService: StaticService
    ){
    }

    private detailUrl = this.staticService.makeApi('articles')
    private options = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.staticService.authorization()
        }),
    })

}
