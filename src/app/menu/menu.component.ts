import {Component, OnInit} from '@angular/core'
import {StaticService} from '../lib/service/static'
import {MenuService} from './menu.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [StaticService, MenuService]
})
export class MenuComponent implements OnInit {

    constructor (
        private menuService: MenuService
    ){
    }

    logout (){
            this.menuService.logout()
                .subscribe(
                    res => {

                    },
                    error => {}
                )
    }

    ngOnInit (){
    }

}
