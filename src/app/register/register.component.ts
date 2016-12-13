import {Component, OnInit} from '@angular/core'
import {Locker} from 'angular2-locker'

import {StaticService} from '../lib/service/static'
import {RegisterService} from './register.service'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [StaticService, RegisterService]
})
export class RegisterComponent implements OnInit {

    constructor (
        private registerService: RegisterService,
        private locker: Locker
    ){
    }

    public username: string = ''
    public email: string = ''
    public password: string = ''
    public errorMessage: string = ''

    // 注册完成界面控制
    public regOver: boolean = false

    register (){
        if (!this.checkName()) return ;
        this.registerService.register({
            email: this.email,
            username: this.username,
            password: this.password
        })
            .subscribe(
                result =>{
                    if (result && result.message){
                        this.errorMessage = result.message
                        this.regOver = true
                    }
                },
                error =>{
                    this.errorMessage = error
                }
            )
    }

    private checkName (){
        if (this.username.length < 3 || this.username.length > 20){
            this.errorMessage = '用户名不符合规范'
            return false
        }
        if (this.password.length < 6 || this.password.length > 20){
            this.errorMessage = '密码不符合规范'
            return false
        }
        if (!/^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/.test(this.email)){
            this.errorMessage = '邮件地址不符合规范'
            return false
        }
        return true
    }

    ngOnInit (){
    }

    change (event){
        this.errorMessage = ''
    }

}
