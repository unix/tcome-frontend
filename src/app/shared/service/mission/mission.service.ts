import {Injectable} from '@angular/core'
import {Subject}    from 'rxjs/Subject'
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable"


@Injectable()
export class MissionService {
    // Observable string sources
    private missionAnnouncedSource = new Subject<any>();
    private missionConfirmedSource = new Subject<any>();
    // Observable string streams
    public missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    public missionConfirmed$ = this.missionConfirmedSource.asObservable();
    // Service message commands
    announceMission (mission: any){
        this.missionAnnouncedSource.next(mission);
    }

    confirmMission (astronaut: any){
        this.missionConfirmedSource.next(astronaut);
    }
}