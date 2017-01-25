import {Component, AfterViewInit, ViewChild} from '@angular/core'
import {Title} from '@angular/platform-browser'

import {MissionService} from './shared/service/mission'
import {StaticService} from './shared/service/static'
import {LockerService} from './shared/service/locker'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [StaticService, MissionService, LockerService]
})
export class AppComponent{
    constructor (
        private missionService: MissionService,
        private titleService: Title,
        private lcoker: LockerService
    ){
        // 订阅子组件通知 通知至所有子组件
        missionService.missionConfirmed$.subscribe(
            astronaut =>{
                missionService.announceMission(astronaut)
            }
        )
    }

    ngAfterViewInit (){
        this.titleService.setTitle('欢迎-维特博客')
    }
}
