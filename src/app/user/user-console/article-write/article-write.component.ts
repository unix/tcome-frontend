import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {ArticleWriteService} from './article-write.service'
import {StaticService} from '../../lib/service/static'

@Component({
    selector: 'app-article-write',
    templateUrl: './article-write.component.html',
    styleUrls: ['./article-write.component.scss'],
    providers: [StaticService, ArticleWriteService]
})
export class ArticleWriteComponent implements OnInit {

    constructor (
        private staticService: StaticService,
        private articleWriteService: ArticleWriteService,
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
        if (this.titleValue.length < 5 || this.titleValue.length > 20){
            return this.staticService.toastyInfo('标题长度不符合规范', '无法提交')
        }
        if (!this.mdValue) return this.staticService.toastyInfo('需要补全正文内容', '无法提交')
        if (this.mdValue.length < 5 || this.mdValue.length > 20000){
            return this.staticService.toastyInfo('正文内容长度不符合规范', '无法提交')
        }
        this.articleWriteService.create({
            title: this.titleValue,
            content: this.mdValue,
        })
            .subscribe(
                res => {
                    if (res && res.id){
                        this.staticService.toastyInfo('文章已发表!', '发表成功')
                        this.router.navigate(['/articles', res.id])
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
