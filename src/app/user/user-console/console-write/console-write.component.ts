import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Title} from '@angular/platform-browser'

import {ConsoleWriteService} from './console-write.service'
import {StaticService} from '../../../shared/service/static'
import {isUndefined} from "util";

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
        private route: ActivatedRoute,
        private titleService: Title,
    ){
    }

    public mdInitialValue: any = ''
    public mdValue: any = ''
    public titleValue: any = ''
    public isAppend: boolean = false
    public appendDetail: any = {}
    public articleTags = {
        value: [],
        show: false
    }

    public thumbnail = {
        name: null,
        url: null
    }

    mdChange (mdValue: any){
        this.mdValue = mdValue
    }
    appendTags (tags: any){
        this.articleTags.show = false
        this.articleTags.value = tags
    }
    submit (){
        if (!this.titleValue) return this.staticService.toastyInfo('需要补全标题', '无法提交')
        if (this.titleValue.length < 5 || this.titleValue.length > 60){
            return this.staticService.toastyInfo('标题长度不符合规范', '无法提交')
        }
        if (!this.mdValue) return this.staticService.toastyInfo('需要补全正文内容', '无法提交')
        if (this.mdValue.length < 100 || this.mdValue.length > 30000){
            return this.staticService.toastyInfo('正文内容长度不符合规范', '无法提交')
        }
        const method = this.isAppend? 'update': 'create'
        this[method]({
            title: this.titleValue,
            content: this.mdValue,
            thumbnail: this.thumbnail.url,
            tags: this.articleTags.value
        })
    }
    addImage ($event: any){
        const file = $event.target.files[0]
        if (!file.type.startsWith('image')) return this.staticService.toastyError('请选择正确的图片')
        if (file.size > 1600000) return this.staticService.toastyError('图片过大，请压缩后上传')

        let thumbnail:FileReader = new FileReader()
        thumbnail.readAsDataURL(file)
        thumbnail.onloadend = () => {
            this.thumbnail= {
                name: file.name,
                url: null
            }
            if (!this.thumbnail.name) return;
            this.consoleWriteService.upload({image: thumbnail.result, size: file.size})
                .subscribe(
                    res => {
                        if (!res || !res.key){
                            this.staticService.toastyError('上传失败，请稍候重试')
                            return this.thumbnail= {name: null, url: null};
                        }
                        this.thumbnail.url = `http://static.wittsay.cc/${res.key}`
                    },
                    error => {
                        if (error) this.staticService.toastyError(error.toString())
                        return this.thumbnail= {name: null, url: null};
                    }
                )
        }
    }
    create (article: any){
        this.consoleWriteService.create(article)
            .subscribe(
                res => {
                    if (res && res.id){
                        this.staticService.toastyInfo('文章已发表，等待审核中...', '发表成功')
                        this.router.navigate(['/articles/list', res.id])
                    }
                },
                error => {
                    if (error) this.staticService.toastyError(error.toString())
                }
            )
    }
    update (article: any){
        this.consoleWriteService.update(article, this.appendDetail.id)
            .subscribe(
                res => {
                    if (res && res.id){
                        this.staticService.toastyInfo('文章已更新，等待审核中...', '更新成功')
                        this.router.navigate(['/articles/list', res.id])
                    }
                },
                error => {
                    if (error) this.staticService.toastyError(error.toString())
                }
            )
    }

    getArticleDetail (id: string){
        this.consoleWriteService.getArticleDetail(id)
            .subscribe(
                res =>{
                    if (res&& res.content){
                        this.mdInitialValue = res.content
                        this.titleValue = res.title
                        this.thumbnail = {
                            name: res.thumbnail? '原题图': null,
                            url: res.thumbnail
                        }
                        this.articleTags.value = res.tags
                        this.appendDetail = res
                    }
                }
            )
    }

    ngOnInit (){
        this.titleService.setTitle('创建文章-维特博客')
        this.route.params.forEach((params: Params) => {
            const id = params['id']
            if (id) {
                this.isAppend = true
                this.titleService.setTitle('更新文章-维特博客')
                this.getArticleDetail(id)
            }
        })
    }

}
