/**
 * Created by WittBulter on 2017/1/25.
 * @description :: user route
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {LoginComponent} from './user-login/login.component'
import {MemberComponent} from './user-console/member.component'


export const userRoutes: Routes = [{
    path: '', component: MemberComponent,
    children: [{
        path: 'login', component: LoginComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forRoot(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}