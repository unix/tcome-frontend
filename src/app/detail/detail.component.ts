import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Title} from '@angular/platform-browser'

import {StaticService} from '../lib/service/static'
import {DetailService} from './detail.service'
import {Detail} from './detail'

let SimpleMDE =  require('simplemde')

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [StaticService, DetailService]
})
export class DetailComponent implements OnInit {

    constructor(
        private detailService: DetailService,
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title,
    ) {
    }
    public detail: Detail

    getDetail (id: string){
        this.detailService.getDetail(id)
            .subscribe(
                detail => this.detail = detail,
                error => console.log(error)
            )
    }

    ngOnInit() {
        let simplemde = new SimpleMDE({ element: document.getElementById("editor") })
        this.titleService.setTitle('文章详情-维特博客')
        this.route.params.forEach((params: Params) => {
            const id = params['id']
            if (id) this.getDetail(id)
        })
    }

}
