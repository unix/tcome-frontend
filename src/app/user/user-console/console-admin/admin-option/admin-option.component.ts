import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'
import {Subject} from 'rxjs/Subject'

import {Option, BlogDescription} from './option'
import {OptionService} from './option.service'
import {StaticService} from '../../../../shared/service/static'

@Component({
    selector: 'app-admin-option',
    templateUrl: './admin-option.component.html',
    styleUrls: ['./admin-option.component.scss'],
    providers: [OptionService]
})
export class AdminOptionComponent implements OnInit {

    constructor (
        private optionService: OptionService,
        private staticService: StaticService,
        private titleService: Title,
        private router: Router
    ){
    }
    private option: Option
    public blogName: string
    public blogSubhead: string

    public blogDescription: Subject<BlogDescription> = new Subject()


    getOption (){
        this.optionService.getOption()
            .subscribe(
                option => {
                    this.option = option
                    this.blogName = this.option.blogName
                    this.blogSubhead = this.option.blogSubhead
                },
                error =>{
                    return this.staticService.toastyInfo(error.json().message);
                }
            )
    }

    saveOption (){
        this.blogDescription.next({
            blogName: this.blogName? this.blogName: this.option.blogName,
            blogSubhead: this.blogSubhead? this.blogSubhead: this.option.blogSubhead,
        })
    }

    ngOnInit (){
        this.titleService.setTitle('博客设置-维特博客')
        this.getOption()

        this.blogDescription
            .distinctUntilChanged()
            .switchMap(des => this.optionService.changeOption(des))
            .subscribe(
                option => this.staticService.toastyInfo('博客基础信息已更新', '修改成功'),
                error => this.staticService.toastyInfo(error.json().message)
            )


    }

}
