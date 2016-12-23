import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

    constructor (
        private titleService: Title,
    ){
    }

    public tabbar:any[] = [{
        content: '文章',
        t: true
    }, {
        content: '回复',
        t: false
    }, {
        content: '撰写',
        t: false
    },{
        content: '更多',
        t: false
    }]

    tabbarToggle (index){
        this.tabbar = this.tabbar.map(v => ({t: false, content: v.content}))
        this.tabbar[index].t = true
    }

    ngOnInit (){
        this.titleService.setTitle('总览-维特博客')
    }

}
