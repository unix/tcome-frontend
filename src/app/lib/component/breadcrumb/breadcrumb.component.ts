import {Component, OnInit} from '@angular/core'
import {Locker} from 'angular2-locker'

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    constructor (private locker: Locker){
    }

    public user: any

    ngOnInit (){
        this.user = this.locker.get('user')
    }

}
