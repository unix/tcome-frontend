import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core'
import {MissionService} from '../../service/mission'

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    constructor (
        private missionService: MissionService
    ){
        this.missionService.missionAnnounced$.subscribe(
            mission =>{
                if (mission&& mission.count) {

                }
            }
        )
    }

    @Input()
    private page: number = 1

    @Input()
    private over: boolean = false

    @Output()
    private next = new EventEmitter<Number>()

    paginationHandle (nextNumber){
        const next = this.page + nextNumber
        if (next < 1) return;
        if (nextNumber > 0&& this.over) return;
        this.page = next
        this.next.emit(next)
    }

    ngOnInit (){
    }

}
