import {Component, AfterViewInit, ViewChild} from '@angular/core'
import {MenuComponent} from './menu/menu.component'

import {MissionService} from './lib/service/mission'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MissionService]
})
export class AppComponent implements AfterViewInit{
    constructor (
        private missionService: MissionService
    ){
        missionService.missionConfirmed$.subscribe(
            astronaut =>{
                if (astronaut.update){
                    this.menuComponent.update()
                }
            }
        )
    }
    @ViewChild(MenuComponent)
    private menuComponent: MenuComponent



    ngAfterViewInit (){

    }
}
