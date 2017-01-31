import {Component, OnInit} from '@angular/core'
import {LockerService} from '../../../shared/service/locker'
import {Title} from '@angular/platform-browser'

@Component({
    selector: 'app-console-main',
    templateUrl: './console-main.component.html',
    styleUrls: ['./console-main.component.scss']
})
export class ConsoleMainComponent implements OnInit {

    constructor (
        private titleService: Title,
        private locker: LockerService
    ){
    }
    public user: any

    ngOnInit (){
        this.titleService.setTitle('总览-维特博客')
        this.user = this.locker.get('user')
    }

}
