import {Component, OnInit} from '@angular/core'
import {LockerService} from '../../shared/service/locker'
import {Router} from '@angular/router'
import {Title} from '@angular/platform-browser'

import {MissionService} from '../../shared/service/mission'
import {LoginService} from './login.service'
import {User} from './user'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    constructor (
        private loginService: LoginService,
        private locker: LockerService,
        private router: Router,
        private missionService: MissionService,
        private titleService: Title,
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
        this.locker.set({user: user})
        this.router.navigate(['/welcome'])
    }

    ngOnInit (){
        this.titleService.setTitle('登录-维特博客')
    }

}
