import {Component, OnInit} from '@angular/core'
import {Locker} from 'angular2-locker'
import {Router} from '@angular/router'

import {StaticService} from '../lib/service/static'
import {MissionService} from '../lib/service/mission'
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
        private loginService: LoginService,
        private locker: Locker,
        private router: Router,
        private missionService: MissionService
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
                res => {
                    if (res.user){
                        this.user = res.user
                        this.loginSuccessful(res.user)
                        this.missionService.confirmMission({update: true})
                    }
                },
                error => {
                    if (error) this.errorMessage = error.toString()
                }
            )
    }

    loginSuccessful (user){
        this.locker.set('user', user)
        this.router.navigate(['/welcome'])
    }

    ngOnInit (){

    }

}
