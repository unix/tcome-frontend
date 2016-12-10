import {Injectable} from '@angular/core'

@Injectable()
export class StaticService {

    constructor() {
    }

    private server: string = 'http://admin.itsmycar.cn/'
    private staging: string = 'http://127.0.0.1:1337/'

    private stagingAuthorization: string = 'de9cc085-8de5-4e74-9095-31ddd5c2d863'

    public makeApi(path: string) {
        return this.staging + path
    }
    public authorization (){
        return this.stagingAuthorization
    }


}
