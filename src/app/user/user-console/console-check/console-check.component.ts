import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

import {List} from './list'
import {CheckService} from './check.service'
import {StaticService} from '../../../shared/service/static'

@Component({
    selector: 'app-console-check',
    templateUrl: './console-check.component.html',
    styleUrls: ['./console-check.component.scss'],
    providers: [CheckService]
})
export class ConsoleCheckComponent implements OnInit {

    constructor (
        private checkService: CheckService,
        private staticService: StaticService,
        private titleService: Title,
        private router: Router
    ){
    }

    list: List[]

    getList (){
        this.checkService.getList()
            .subscribe(
                list => this.list = list,
                error =>{
                    return this.staticService.toastyInfo(error.json().message);
                }
            )
    }
    review (id:number, status:string){
        this.checkService.checkArticle(id, status)
            .subscribe(
                res =>{
                    this.staticService.toastySuccess('文章状态已更新', '操作成功!')
                    this.getList()
                },
                error =>{
                    return this.staticService.toastyInfo(error.json().message);
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
