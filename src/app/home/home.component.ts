import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor (private titleService: Title,){
    }

    ngOnInit (){
        this.titleService.setTitle('欢迎-维特博客')
    }

}
