import {Injectable} from '@angular/core'

@Injectable()
export class StaticService {

    constructor() {
    }

    private server: string = 'http://admin.itsmycar.cn/'
    private staging: string = 'http://127.0.0.1:1337/'

    public makeApi(path: string) {
        return this.staging + path
    }

}
