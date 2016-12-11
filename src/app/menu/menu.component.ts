import {Component, OnInit} from '@angular/core'
import {Locker} from 'angular2-locker'

import {StaticService} from '../lib/service/static'
import {MissionService} from '../lib/service/mission'
import {MenuService} from './menu.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [StaticService, MenuService]
})
export class MenuComponent implements OnInit {

    constructor (
        private menuService: MenuService,
        private locker: Locker,
        private missionService: MissionService
    ){
        this.missionService.missionAnnounced$.subscribe(
            mission =>{
                if (mission&& mission.update) this.update()
            }
        )
    }

    public user: any

    logout (){
        this.menuService.logout()
            .subscribe(
                res =>{
                    this.locker.clear()
                    this.user = {}
                    this.missionService.confirmMission({update: true})
                },
                error =>{
                    if (error.status == 401){
                        this.locker.clear()
                        this.user = {}
                        this.missionService.confirmMission({update: true})
                    }
                }
            )
    }

    update (){
        this.user = this.locker.get('user')
    }

    ngOnInit (){
        this.user = this.locker.get('user')
    }

}
