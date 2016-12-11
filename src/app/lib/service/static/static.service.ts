import {Injectable} from '@angular/core'
import {Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from "rxjs"
import 'rxjs/add/observable/throw'

@Injectable()
export class StaticService {

    constructor() {
    }

    private server: string = 'http://admin.itsmycar.cn/'
    private staging: string = 'http://127.0.0.1:1337/'

    private stagingAuthorization: string = 'de9cc085-8de5-4e74-9095-31ddd5c2d863'
    public options = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.authorization()
        })
    })

    public makeApi(path: string) {
        return this.staging + path
    }
    public authorization (){
        return this.stagingAuthorization
    }

    public extractData(res: Response) {
        const body = res.json()
        return body || {}
    }
    handleError(error: any) {
        return error.json()
    }


}
