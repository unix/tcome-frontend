import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core'

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    constructor (
    ){
    }
    private listOver: boolean = false

    @Input()
    private page: number = 1

    @Output()
    private next = new EventEmitter<Number>()

    paginationHandle (nextNumber){
        const next = this.page + nextNumber
        if (next < 1) return;
        this.next.emit(next)
    }

    private checkCount (count){
        if (count / 15 <= this.page){
            this.listOver = true
        }
    }

    ngOnInit (){
    }

}
