import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'

import {List} from './list'
import {ListService} from './list.service'
import {StaticService} from '../lib/service/static'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [StaticService, ListService]
})
export class ListComponent implements OnInit {

    constructor(
        private listService: ListService,
        private titleService: Title,
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

    ngOnInit() {
        this.titleService.setTitle('文章列表-维特博客')
        this.getList()
    }

}
