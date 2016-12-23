import {Injectable} from '@angular/core'
import {Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from "rxjs"
import {Locker} from 'angular2-locker'
import {ToastyService, ToastOptions} from 'ng2-toasty'

import 'rxjs/add/observable/throw'


@Injectable()
export class StaticService {

    constructor(
        private locker: Locker,
        private toastyService:ToastyService,
    ) {
    }

    private staging: string = 'http://127.0.0.1:1337/'

    public options = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.locker.get('user')? this.locker.get('user').token: ''
        })
    })

    public makeApi(path: string) {
        return this.staging + path
    }
    public authorization (){
        return this.locker.get('user')? this.locker.get('user').token: ''
    }
    public clearAuthorization (){
        this.locker.clear()
    }

    public extractData(res: Response) {
        let body
        if (res.status != 204){
            body = res.json()
        }
        return body || {}
    }

    public toastyInfo (message: string){
        let toastOptions:ToastOptions = {
            title: "My title",
            msg: "The message",
            theme: 'material',
        }
        this.toastyService.info(toastOptions);
    }



    handleError(error: any) {
        return error.json()
    }


}
