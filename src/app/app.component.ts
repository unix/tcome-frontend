import {Component, AfterViewInit, ViewChild} from '@angular/core'
import {Title} from '@angular/platform-browser'

import {MissionService} from './lib/service/mission'
import {StaticService} from './lib/service/static'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [StaticService, MissionService]
})
export class AppComponent{
    constructor (
        private missionService: MissionService,
        private titleService: Title,
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
