import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

    constructor (){
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
    }

}
