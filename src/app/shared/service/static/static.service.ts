import {Injectable} from '@angular/core'
import {Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from "rxjs"
import {LockerService} from '../locker'
import {ToastyService, ToastOptions} from 'ng2-toasty'

import 'rxjs/Rx'
import {environment} from '../../../../environments/environment'

@Injectable()
export class StaticService {

    constructor(
        private locker: LockerService,
        private toastyService:ToastyService,
    ) {
    }

    private host: string = environment.host

    public options = () =>{
        return new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.locker.get('user')? this.locker.get('user').clientToken: ''
            })
        })
    }

    public makeApi(path: string) {
        return this.host + path
    }
    public authorization (){
        return this.locker.get('user')? this.locker.get('user').clientToken: ''
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

    public toastyInfo (message: string, title: string = '提示'){
        const toastOptions:ToastOptions = {
            title: title,
            msg: message,
            theme: 'material',
        }
        this.toastyService.info(toastOptions);
    }
    public toastyError (message: string, title: string = '错误提示'){
        const toastOptions:ToastOptions = {
            title: title,
            msg: message,
            theme: 'material',
        }
        this.toastyService.error(toastOptions);
    }



    handleError(error: any) {
        return error.json()
    }


}
