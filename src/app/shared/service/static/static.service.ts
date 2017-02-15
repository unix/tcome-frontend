import {Injectable} from '@angular/core'
import {Response, Headers, RequestOptions} from '@angular/http'
import {LockerService} from '../locker'
import {ToastyService, ToastOptions} from 'ng2-toasty'
import {MissionService} from '../mission'

import 'rxjs/Rx'
import {environment} from '../../../../environments/environment'

@Injectable()
export class StaticService {

    constructor(
        private locker: LockerService,
        private toastyService:ToastyService
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
        // 存在总数限制，通知其他组件
        const total = res.headers.get('total')
        if (total){
        }

        if (res.status != 204) return res.json() || {}
        return {}
    }

    public toastyInfo (message: string, title: string = '提示'){
        const toastOptions:ToastOptions = {
            title: title,
            msg: message,
            theme: 'material',
        }
        this.toastyService.info(toastOptions);
    }
    public toastySuccess (message: string, title: string = '成功'){
        const toastOptions:ToastOptions = {
            title: title,
            msg: message,
            theme: 'material',
        }
        this.toastyService.success(toastOptions);
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
