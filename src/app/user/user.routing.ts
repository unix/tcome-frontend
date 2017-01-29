/**
 * Created by WittBulter on 2017/1/25.
 * @description :: user route
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {UserMainComponent} from './user-main/user-main.component'
import {LoginComponent} from './user-login/login.component'
import {RegisterComponent} from './user-register/register.component'

import {AuthService} from '../shared/service/auth'


export const userRoutes: Routes = [{
    path: '', component: UserMainComponent,
    children: [{
        path: '', redirectTo:'login',pathMatch:'full'
    },{
        path: 'login', component: LoginComponent
    },{
        path: 'register', component: RegisterComponent
    },{
        path: 'register/:id/:token', component: RegisterComponent
    },{
        path: 'console',
        loadChildren: './user-console/console.module#ConsoleModule',
        data: {preload: true},
        canActivate: [AuthService],
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}