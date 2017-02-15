import {Component, OnInit} from '@angular/core'
import {LockerService} from '../../../shared/service/locker'
import {StaticService} from '../../../shared/service/static'
import {Router} from '@angular/router'

import {ConsoleSubjectService} from './console-subject.service'
import {Subject} from './subject'

@Component({
    selector: 'app-console-subject',
    templateUrl: './console-subject.component.html',
    styleUrls: ['./console-subject.component.scss'],
    providers: [ConsoleSubjectService]
})
export class ConsoleSubjectComponent implements OnInit {

    constructor (
        private consoleSubjectService: ConsoleSubjectService,
        private locker: LockerService,
        private staticService: StaticService,
        private router: Router,
    ){
    }

    public list: Subject[]
    private user: any

    getList(id) {
        this.consoleSubjectService.getList(id)
            .subscribe(
                list => this.list = list,
                error => {
                    console.log(error);
                }
            )
    }
    goNext (path){
        this.router.navigate(['/articles/list', path])
    }
    goAppend (id, status: string){
        if (status == 'isDestroy') {
            return this.staticService.toastyInfo('无法编辑', '此文章已被管理员标记为删除！')
        }
        this.router.navigate(['/user/console/subject/append', id])
    }
    statusMap (status: string){
        if (status == 'isReview') return '等待审核'
        if (status == 'isActive') return '已审核'
        if (status == 'isDestroy')  return '已删除'
        return '已审核'
    }

    ngOnInit() {
        this.user = this.locker.get('user')
        if (!this.user|| !this.user.id){
            return this.router.navigate(['/welcome'])
        }
        this.getList(this.user.id)
    }

}
