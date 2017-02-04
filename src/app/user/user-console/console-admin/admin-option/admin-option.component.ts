import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

import {Option} from './option'
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
        if (this.blogName) this.option.blogName = this.blogName
        if (this.blogSubhead) this.option.blogSubhead = this.blogSubhead
        this.optionService.changeOption(this.option)
            .subscribe(
                option =>{
                    return this.staticService.toastyInfo('博客基础信息已更新', '修改成功')
                },
                error =>{
                    return this.staticService.toastyInfo(error.json().message);
                }
            )
    }

    ngOnInit (){
        this.titleService.setTitle('博客设置-维特博客')
        this.getOption()
    }

}
