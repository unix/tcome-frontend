import {Injectable} from '@angular/core'

@Injectable()
export class StaticService {

    constructor() {
    }

    private server: string = 'http://admin.itsmycar.cn/'

    public makeApi(path: string) {
        return this.server + path
    }

}
