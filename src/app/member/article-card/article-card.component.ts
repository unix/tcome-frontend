import {Component, OnInit} from '@angular/core'

import {StaticService} from '../../lib/service/static'
import {ArticleCardService} from './article-card.service'
import {List} from './list'

@Component({
    selector: 'app-article-card',
    templateUrl: './article-card.component.html',
    styleUrls: ['./article-card.component.scss'],
    providers: [StaticService, ArticleCardService]
})
export class ArticleCardComponent implements OnInit {

    constructor (
        private articleCardService: ArticleCardService
    ){
    }

    public list: List[]

    getList() {
        this.articleCardService.getList()
            .subscribe(
                list => this.list = list,
                error => {
                    console.log(error);
                }
            )
    }

    ngOnInit() {
        this.getList()
    }

}
