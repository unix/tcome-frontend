import {Component, OnInit} from '@angular/core'

import {StaticService} from '../lib/service/static'
import {LoginService} from './login.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [StaticService, LoginService]
})
export class LoginComponent implements OnInit {

    constructor (){
    }
    public username:string = ''
    public email:string = ''
    public password:string = ''

    login (){
        console.log(this.username);
    }

    ngOnInit (){
    }

}
