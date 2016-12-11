import {Component, OnInit} from '@angular/core'
import {Locker} from 'angular2-locker'

import {MissionService} from '../../service/mission'

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    constructor (
        private locker: Locker,
        private missionService: MissionService
    ){
        missionService.missionAnnounced$.subscribe(
            mission =>{
                if (mission&& mission.update) this.update()
            }
        )
    }

    public user: any

    update (){
        this.user = this.locker.get('user')
    }
    ngOnInit (){
        this.user = this.locker.get('user')
    }

}
