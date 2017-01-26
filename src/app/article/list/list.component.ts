import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

import {List} from './list'
import {ListService} from './list.service'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [ListService]
})
export class ListComponent implements OnInit {

    constructor(
        private listService: ListService,
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

    ngOnInit() {
        this.titleService.setTitle('文章列表-维特博客')
        this.getList()
    }

}
