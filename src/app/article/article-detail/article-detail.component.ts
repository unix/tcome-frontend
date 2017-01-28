import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Title} from '@angular/platform-browser'

import {StaticService} from '../../shared/service/static'
import {MissionService} from '../../shared/service/mission'
import {LockerService} from '../../shared/service/locker'
import {ArticleDetailService} from './article-detail.service'
import {Detail} from './detail'
import {Comment} from './comment'


@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.scss'],
    providers: [ArticleDetailService]
})
export class ArticleDetailComponent implements OnInit {

    constructor(
        private detailService: ArticleDetailService,
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title,
        private staticService: StaticService,
        private missionService: MissionService,
        private locker: LockerService
    ) {
    }
    public detail: Detail
    public comment: Comment[] = []
    public field = ''
    public mdValue: any = ''

    getDetail (id: string){
        this.getComment(id)
        this.detailService.getDetail(id)
            .subscribe(
                detail => this.detail = detail,
                error => console.log(error)
            )
    }
    getComment (id: string){
        this.detailService.getComment(id)
            .subscribe(
                comment => this.comment = comment,
                error => console.log(error)
            )
    }
    createComment (){
        if (!this.locker.get('user') || !this.locker.get('user').id){
            return this.staticService.toastyInfo('评论文章需要您先登录', '无法评论');
        }
        if (this.mdValue.length < 5) return this.staticService.toastyInfo('评论过短', '无法提交');
        this.detailService.postComment(this.detail.id, {
            content: this.mdValue
        })
            .subscribe(
                comment => {
                    this.getComment(this.detail.id)
                    this.field = ''
                },
                errorStatus => {
                    if (errorStatus == 403 || errorStatus == 401){
                        this.staticService.toastyInfo('登录已过期, 请重新登录', '无法评论')
                        this.staticService.clearAuthorization()
                        return this.missionService.confirmMission({update: true})
                    }
                }
            )

    }

    mdChange (mdValue: any){
        this.mdValue = mdValue
    }

    ngOnInit() {
        this.titleService.setTitle('文章详情-维特博客')
        this.route.params.forEach((params: Params) => {
            const id = params['id']
            if (id) this.getDetail(id)
        })
    }

}
