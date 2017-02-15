import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject'
import 'rxjs/add/operator/map'


@Injectable()
export class MissionService {

    private missionAnnouncedSource = new Subject<any>();
    private missionConfirmedSource = new Subject<any>();

    public missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    public missionConfirmed$ = this.missionConfirmedSource.asObservable();

    announceMission (mission: any){
        this.missionAnnouncedSource.next(mission);
    }

    confirmMission (astronaut: any){
        this.missionConfirmedSource.next(astronaut);
    }
}