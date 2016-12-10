import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
    }

    menuTitles = [{
        name: '归档',
        detail: '',
        number: '5'
    }, {
        name: ' 作者',
        detail: '',
        number: '5'
    }, {
        name: '搜索',
        detail: '',
        number: '5'
    }]

}
