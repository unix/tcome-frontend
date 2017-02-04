import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

import {Option} from './option'
import {RecommendService} from './recommend.service'
import {StaticService} from '../../../../shared/service/static'

@Component({
    selector: 'app-admin-recommend',
    templateUrl: './admin-recommend.component.html',
    styleUrls: ['./admin-recommend.component.scss'],
    providers: [RecommendService]
})
export class AdminRecommendComponent implements OnInit {

    constructor (
        private recommendService: RecommendService,
        private staticService: StaticService,
        private titleService: Title,
        private router: Router
    ){
    }
    option: Option

    getList (){
        this.recommendService.getList()
            .subscribe(
                option => this.option = option,
                error =>{
                    return this.staticService.toastyInfo(error.json().message);
                }
            )
    }

    ngOnInit (){
        this.titleService.setTitle('推荐文章-维特博客')
        this.getList()
    }

}
