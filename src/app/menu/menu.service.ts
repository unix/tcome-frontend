import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'

import {StaticService} from '../lib/service/static'

@Injectable()
export class MenuService {

    constructor (private http: Http,
                 private staticService: StaticService){
    }

    private session = this.staticService.makeApi('session')

    logout ():Observable<any> {
        return this.http.delete(this.session, this.staticService.options)
            .map(this.staticService.extractData)
            .catch(this.staticService.handleError)
    }

}
