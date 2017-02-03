import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'app-admin-menu',
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

    constructor (
        private router: Router
    ){
    }

    goNext (path: string){
        this.router.navigate([`/user/console/admin/${path}`])
    }

    ngOnInit (){
    }

}
