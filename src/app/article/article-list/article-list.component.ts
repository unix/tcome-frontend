import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {StaticService} from '../../shared/service/static'

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
        private route: ActivatedRoute,
        private staticService: StaticService
    ) {}

    list: List[]
    errorMessage: string
    public activePage: number = 1
    public listOver: boolean = false

    getList(pageSize:number = 1) {
        this.activePage = ~~pageSize? pageSize: 1
        this.listService.getList(this.activePage)
            .subscribe(
                res => {
                    if (res&& res.list){
                        this.list = res.list
                        this.checkOver(res.total)
                    }
                },
                error => {
                    this.errorMessage = error.json().message
                }
            )
    }
    checkOver (total: number){
        if (total&& total / 15 <= this.activePage){
            return this.listOver = true
        }
        this.listOver = false
    }

    goNext (path){
        this.router.navigate(['/articles/list', path])
    }
    pageNext (page: number){
        this.router.navigate(['/articles/list/page', page])
    }

    ngOnInit() {
        this.titleService.setTitle('文章列表-维特博客')
        this.route.params
            .forEach((params: Params) => this.getList(+params['p']))
    }

}
