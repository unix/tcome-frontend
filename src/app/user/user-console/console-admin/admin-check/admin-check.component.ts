import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

import {List} from './list'
import {CheckService} from './check.service'
import {StaticService} from '../../../../shared/service/static'

@Component({
    selector: 'app-admin-check',
    templateUrl: './admin-check.component.html',
    styleUrls: ['./admin-check.component.scss'],
    providers: [CheckService]
})
export class AdminCheckComponent implements OnInit {

    constructor (
        private checkService: CheckService,
        private staticService: StaticService,
        private titleService: Title,
        private router: Router
    ){
    }

    list: List[]
    status: string = 'all'

    getList (){
        this.checkService.getList(this.status)
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

    goNext (path: string){
        this.router.navigate(['/articles/list', path])
    }
    chengStatus (status: string = 'all'){
        this.status = status
        this.getList()
    }
    statusMap (status){
        if (status == 'isReview') return '等待审核'
        if (status == 'isActive') return '已审核'
        if (status == 'isDestroy')  return '已删除'
        return '已审核'
    }

    ngOnInit (){
        this.titleService.setTitle('文章审核-维特博客')
        this.getList()
    }

}
