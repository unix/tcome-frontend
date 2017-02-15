import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

import {List} from './list'
import {ArticleListService} from './article-list.service'

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
    providers: [ArticleListService]
})
export class ArticleListComponent implements OnInit {

    constructor(
        private listService: ArticleListService,
        private titleService: Title,
        private router: Router,
    ) {}

    list: List[]
    errorMessage: string

    getList() {
        this.listService.getList()
            .subscribe(
                list => this.list = list,
                error => {
                    this.errorMessage = error.json().message
                }
            )
    }

    goNext (path){
        this.router.navigate(['/articles/list', path])
    }
    pageNext (page: number){
        console.log(page);
    }

    ngOnInit() {
        this.titleService.setTitle('文章列表-维特博客')
        this.getList()
    }

}
