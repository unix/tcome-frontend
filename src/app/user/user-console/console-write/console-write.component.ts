import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {ConsoleWriteService} from './console-write.service'
import {StaticService} from '../../../shared/service/static'

@Component({
    selector: 'app-console-write',
    templateUrl: './console-write.component.html',
    styleUrls: ['./console-write.component.scss'],
    providers: [ConsoleWriteService]
})
export class ConsoleWriteComponent implements OnInit {

    constructor (
        private staticService: StaticService,
        private consoleWriteService: ConsoleWriteService,
        private router: Router,
    ){
    }

    public mdValue: any = ''
    public titleValue: any = ''

    mdChange (mdValue: any){
        this.mdValue = mdValue
    }
    submit (){
        if (!this.titleValue) return this.staticService.toastyInfo('需要补全标题', '无法提交')
        if (this.titleValue.length < 5 || this.titleValue.length > 40){
            return this.staticService.toastyInfo('标题长度不符合规范', '无法提交')
        }
        if (!this.mdValue) return this.staticService.toastyInfo('需要补全正文内容', '无法提交')
        if (this.mdValue.length < 5 || this.mdValue.length > 20000){
            return this.staticService.toastyInfo('正文内容长度不符合规范', '无法提交')
        }
        this.consoleWriteService.create({
            title: this.titleValue,
            content: this.mdValue,
        })
            .subscribe(
                res => {
                    if (res && res.id){
                        this.staticService.toastyInfo('文章已发表!', '发表成功')
                        this.router.navigate(['/articles/list', res.id])
                    }
                },
                error => {
                    if (error) this.staticService.toastyError(error.toString())
                }
            )
    }
    addImages (){

    }

    ngOnInit (){
    }

}
