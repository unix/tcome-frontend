/**
 * Created by WittBulter on 2017/1/25.
 * @description :: user module
 */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MomentModule} from 'angular2-moment'
import {UserRoutingModule} from './user.routing'
import {ResponsiveModule} from 'ng2-responsive'

import {UserMainComponent} from './user-main/user-main.component'
import {LoginComponent} from './user-login/login.component'
import {RegisterComponent} from './user-register/register.component'

@NgModule({
    declarations: [
        UserMainComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        UserRoutingModule,
        ResponsiveModule
    ],
    exports: [UserMainComponent],
    providers: []
})
export class UserModule {
}