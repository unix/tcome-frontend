import {Component, OnInit, OnDestroy} from '@angular/core'
import {LockerService} from '../shared/service/locker'
import {Router} from '@angular/router'

import {MissionService} from '../shared/service/mission'
import {MenuService} from './menu.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [MenuService]
})
export class MenuComponent implements OnInit, OnDestroy {

    constructor (
        private menuService: MenuService,
        private locker: LockerService,
        private missionService: MissionService,
        private router: Router,
    ){
        this.missionService.missionAnnounced$.subscribe(
            mission =>{
                if (mission&& mission.update) this.update()
            }
        )
    }

    public user: any = {
        avatar: 'http://static.wittsay.cc/default_avatar.jpg'
    }
    public videoNow: string = ''
    public videoHidden: boolean = true
    private timer: any

    logout (){
        this.menuService.logout()
            .subscribe(
                res =>{
                },
                error =>{
                }
            )
        this.locker.clear()
        this.user = {}
        this.router.navigate(['/user/login'])
        this.missionService.confirmMission({update: true})
    }
    goNext (path: string){
        this.router.navigate([`/user/${path}`])
    }
    getVideo (){
        this.menuService.getVideo('http://static.wittsay.cc/homepage.mov')
            .subscribe(
                res =>{
                    if (!this.videoNow) this.videoNow = res.url
                    this.videoHidden = false
                },
                error =>{
                    console.log(error);
                }
            )
    }
    ended (){
        this.videoHidden = true
        if (this.timer) return ;
        this.timer = setInterval(() =>{
            if (this.videoNow) return this.videoHidden = false;
        }, 60 * 1000)
    }


    update (){
        this.user = this.locker.get('user')
    }

    ngOnInit (){
        this.user = this.locker.get('user')
        this.getVideo()
    }
    ngOnDestroy (){
        this.timer&& clearInterval(this.timer)
    }

}
