import {Component, OnInit} from '@angular/core';
import {List} from './list'
import {ListService} from './list.service'

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
    providers: [ListService]
})
export class ListComponent implements OnInit {

    constructor(private listService: ListService) {}

    list: List[]
    errorMessage: string

    ngOnInit() {
        this.getList()
    }

    getList() {
        this.listService.getList()
            .subscribe(
                list => this.list = list,
                error => this.errorMessage = error
            )
    }

}
