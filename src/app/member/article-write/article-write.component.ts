import {Component, OnInit} from '@angular/core'

import {StaticService} from '../../lib/service/static'

@Component({
    selector: 'app-article-write',
    templateUrl: './article-write.component.html',
    styleUrls: ['./article-write.component.scss'],
    providers: [StaticService]
})
export class ArticleWriteComponent implements OnInit {

    constructor (
        private staticService: StaticService
    ){
    }

    public mdValue: any = ''
    public titleValue: any = ''

    mdChange (mdValue: any){
        this.mdValue = mdValue
    }
    submit (){
        if (!this.titleValue){
            this.staticService.toastyInfo('123')
        }

    }


    ngOnInit (){
    }

}
