import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Title} from '@angular/platform-browser'

import {RegisterService} from './register.service'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

    constructor (
        private registerService: RegisterService,
        private titleService: Title,
        private route: ActivatedRoute,
        private router: Router,
    ){
    }

    public username: string = ''
    public email: string = ''
    public password: string = ''
    public errorMessage: string = ''
    public validateToggle: boolean = false

    // 注册完成界面控制 注册/注册完成/验证中/验证完成
    public regView: boolean[] = [true, false, false, false]

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
                        this.regView = [false, true, false, false]
                    }
                },
                error =>{
                    this.errorMessage = error
                }
            )
    }
    validate (id, token){
        this.registerService.valiedate(id, token)
            .subscribe(
                user =>{
                    this.validateToggle = true
                    this.regView = [false, false, false, true]
                },
                error =>{
                    this.errorMessage = error
                    this.validateToggle = false
                    this.regView = [false, false, false, true]
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
    change (event){
        this.errorMessage = ''
    }

    ngOnInit (){
        this.titleService.setTitle('注册-维特博客')
        this.route.params.forEach((params: Params) => {
            const id = params['id']
            const token = params['token']
            if (id && token){
                this.validate(id, token)
                this.regView = [false, false, true, false]
            }
        })
    }

}
