import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {LockerService} from '../../../shared/service/locker'
import {ConsoleReplyService} from './console-reply.service'
import {Reply} from './reply'

@Component({
    selector: 'app-console-reply',
    templateUrl: './console-reply.component.html',
    styleUrls: ['./console-reply.component.scss'],
    providers: [ConsoleReplyService]
})
export class ConsoleReplyComponent implements OnInit {

    constructor (
        private consoleReplyService: ConsoleReplyService,
        private locker: LockerService,
        private router: Router,
    ){
    }
    public user: any
    public reply: Reply[]

    getReply(id) {
        this.consoleReplyService.getReply(id)
            .subscribe(
                reply => this.reply = reply,
                error => {
                    console.log(error);
                }
            )
    }
    goNext (path, id){
        this.router.navigate([`/articles/list`, path], {fragment: `${id}-comment`})
    }

    ngOnInit (){
        this.user = this.locker.get('user')
        if (!this.user|| !this.user.id){
            return this.router.navigate(['/welcome'])
        }
        this.getReply(this.user.id)
    }

}
