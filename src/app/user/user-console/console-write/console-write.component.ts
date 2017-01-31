import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

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
    ){
    }

    public mdValue: any = ''
    public titleValue: any = ''

    public thumbnail = {
        name: null,
        url: null
    }

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
            thumbnail: this.thumbnail.url
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
    addImage ($event: any){
        const file = $event.target.files[0]
        if (!file.type.startsWith('image')){
            return this.staticService.toastyError('请选择正确的图片')
        }
        if (file.size > 1600000){
            return this.staticService.toastyError('图片过大，请压缩后上传')
        }
        let thumbnail:FileReader = new FileReader()
        thumbnail.readAsDataURL(file)
        thumbnail.onloadend = () => {
            this.thumbnail= {
                name: file.name,
                url: null
            }
            this.uploadImage(thumbnail.result, file.size, (err, res) =>{
                if (err) return this.clearImage()
                this.thumbnail.url = `http://static.wittsay.cc/${res.key}`
            })
        }
    }
    clearImage (){
        this.thumbnail= {
            name: null,
            url: null
        }
    }
    uploadImage (base64, size, done){
        if (!this.thumbnail.name) return;
        this.consoleWriteService.upload({image: base64, size: size})
            .subscribe(
                res => {
                    if (!res || !res.key){
                        this.staticService.toastyError('上传失败，请稍候重试')
                        return done({})
                    }
                    done(res)
                },
                error => {
                    if (error) this.staticService.toastyError(error.toString())
                    done(error)
                }
            )
    }

    ngOnInit (){
    }

}
