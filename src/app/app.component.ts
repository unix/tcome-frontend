import {Component, AfterViewInit, ViewChild} from '@angular/core'
import {MissionService} from './lib/service/mission'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MissionService]
})
export class AppComponent{
    constructor (
        private missionService: MissionService,
    ){
        // 订阅子组件通知 通知至所有子组件
        missionService.missionConfirmed$.subscribe(
            astronaut =>{
                missionService.announceMission(astronaut)
            }
        )
    }

    ngAfterViewInit (){

    }
}
