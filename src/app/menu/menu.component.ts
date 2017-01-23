import {Component, OnInit} from '@angular/core'
import {Locker} from 'angular2-locker'
import {Router} from '@angular/router'

import {MissionService} from '../lib/service/mission'
import {MenuService} from './menu.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [MenuService]
})
export class MenuComponent implements OnInit {

    constructor (
        private menuService: MenuService,
        private locker: Locker,
        private missionService: MissionService,
        private router: Router,
    ){
        this.missionService.missionAnnounced$.subscribe(
            mission =>{
                if (mission&& mission.update) this.update()
            }
        )
    }

    public user: any
    public videoData: string [] = []
    public videoNow: string = ''

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
    goNext (path: string){
        this.router.navigate([`/${path}`])
    }
    getVideo (){
        ['http://static.wittsay.cc/homepage.mov'].forEach(v =>{
            this.menuService.getVideo(v)
                .subscribe(
                    res =>{
                        res.url? this.videoData.push(res.url): ''
                        if (!this.videoNow) this.videoNow = res.url
                    },
                    error =>{
                        console.log(error);
                    }
                )
        })
    }
    ended (){
        this.videoNow = this.videoData[~~(Math.random() * this.videoData.length)]
    }


    update (){
        this.user = this.locker.get('user')
    }

    ngOnInit (){
        this.user = this.locker.get('user')
        this.getVideo()
    }

}
