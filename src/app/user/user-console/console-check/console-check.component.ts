import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

import {List} from './list'
import {CheckService} from './check.service'

@Component({
    selector: 'app-console-check',
    templateUrl: './console-check.component.html',
    styleUrls: ['./console-check.component.scss'],
    providers: [CheckService]
})
export class ConsoleCheckComponent implements OnInit {

    constructor (
        private checkService: CheckService,
        private titleService: Title,
        private router: Router
    ){
    }

    list: List[]
    errorMessage: string

    getList (){
        this.checkService.getList()
            .subscribe(
                list => this.list = list,
                error =>{
                    this.errorMessage = error.json().message
                }
            )
    }

    goNext (path){
        this.router.navigate(['/articles/list', path])
    }

    ngOnInit (){
        this.titleService.setTitle('文章审核-维特博客')
        this.getList()
    }

}
