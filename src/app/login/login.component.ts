import {Component, OnInit} from '@angular/core'

import {StaticService} from '../lib/service/static'
import {LoginService} from './login.service'

import {User} from './user'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [StaticService, LoginService]
})
export class LoginComponent implements OnInit {

    constructor (
        private loginService: LoginService
    ){
    }
    public email:string = ''
    public password:string = ''
    public errorMessage: string = ''

    public user: User

    login (){

        this.loginService.login({
            email: this.email,
            password: this.password
        })
            .subscribe(
                res => this.user = res.user,
                error => {
                    if (error) this.errorMessage = error.toString()
                }
            )
    }

    ngOnInit (){
    }

}
