import {Component, OnInit} from '@angular/core'

import {StaticService} from '../../../shared/service/static'
import {LockerService} from '../../../shared/service/locker'
import {MissionService} from '../../../shared/service/mission'
import {SettingService} from './setting.service'

@Component({
    selector: 'app-console-setting',
    templateUrl: './console-setting.component.html',
    styleUrls: ['./console-setting.component.scss'],
    providers: [SettingService]
})
export class ConsoleSettingComponent implements OnInit {

    constructor (
        private staticService: StaticService,
        private settingService: SettingService,
        private locker: LockerService,
        private missionService: MissionService
    ){
    }
    private avatar: string
    public username: string

    getUser (){
            this.settingService.getUser()
                .subscribe(
                    res =>{
                        if (res && res.id){
                            this.avatar = res.avatar
                            this.username = res.username
                        }
                    },
                    err =>{
                        return this.staticService.toastyError(err)
                    }
                )
    }

    changeAvatar ($event: any){
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
            this.uploadImage(thumbnail.result, file.size)
        }
    }
    uploadImage (base64, size){
        this.settingService.upload({image: base64, size: size})
            .subscribe(
                res => {
                    if (!res || !res.key){
                        this.staticService.toastyError('上传失败，请稍候重试')
                        return this.avatar = ''
                    }
                    this.avatar = `http://static.wittsay.cc/${res.key}`
                },
                error => {
                    if (error) this.staticService.toastyError(error.toString())
                }
            )
    }

    saveOption (){
        if (!this.username|| this.username.length < 1 || this.username.length > 8){
            return this.staticService.toastyError('用户昵称格式有错误', '无法提交')
        }
        this.settingService.changeUser({
            username: this.username,
            avatar: this.avatar? this.avatar: null
        })
            .subscribe(
                res =>{
                    this.updateUser(res)
                },
                err =>{
                    return this.staticService.toastyError(err)
                }
            )
    }

    updateUser (user: any){
        const localUser = this.locker.get('user')
        this.staticService.toastySuccess('用户信息成功更新', '保存成功')

        this.locker.set({user: Object.assign(localUser, user)})
        this.missionService.confirmMission({update: true})
    }

    ngOnInit (){
        this.getUser()
    }

}
