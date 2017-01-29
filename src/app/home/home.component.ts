import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'

import {HomeService} from './home.service'
import {Option} from './option'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeService]
})
export class HomeComponent implements OnInit {

    constructor (
        private titleService: Title,
        private homeService: HomeService
    ){
    }
    public option: Option

    getOption (){
        this.homeService.getOption()
            .subscribe(
                option => {
                    this.option = option
                    console.log(this.option);
                },
                error =>{
                    console.log(error);
                }
            )
    }

    ngOnInit (){
        this.titleService.setTitle('欢迎-维特博客')
        this.getOption()
    }

}
