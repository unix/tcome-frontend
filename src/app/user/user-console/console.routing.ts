/**
 * Created by WittBulter on 2017/1/28.
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {ConsoleMainComponent} from './console-main/console-main.component'


export const consoleRoutes: Routes = [{
    path: '', component: ConsoleMainComponent,
    children: [{
        path: '', redirectTo:'login',pathMatch:'full'
    },{
        path: 'login', component: LoginComponent
    },{
        path: 'register', component: RegisterComponent
    },{
        path: 'console', component: MemberComponent, canActivate: [AuthService],
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(consoleRoutes)],
    exports: [RouterModule]
})
export class ConsoleRoutingModule {
}