import {Injectable} from '@angular/core'
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

import {LockerService} from '../locker'

@Injectable()
export class AuthService {

    constructor (
        private router: Router,
        private locker: LockerService
    ){
    }

    public redirectUrl: string

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url

        return this.checkLogin(url)
    }

    checkLogin(url: string): boolean {
        if (this.isLoggedIn()) return true;

        this.redirectUrl = url;
        this.router.navigate(['/user/login']);
        return false;
    }

    isLoggedIn (){
        const user = this.locker.get('user')
        return (user && user.id);
    }

}
