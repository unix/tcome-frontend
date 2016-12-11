import {Component, OnInit} from '@angular/core'
import {Locker} from 'angular2-locker'

import {StaticService} from '../lib/service/static'
import {MenuService} from './menu.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [StaticService, MenuService]
})
export class MenuComponent implements OnInit {

    constructor (private menuService: MenuService, private locker: Locker){
    }

    public user: any

    logout (){
        this.menuService.logout()
            .subscribe(
                res =>{

                },
                error =>{
                }
            )
    }

    ngOnInit (){
        this.user = this.locker.get('user')
    }

}
