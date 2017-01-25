/**
 * Created by WittBulter on 2017/1/25.
 * @description :: user module
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserRoutingModule} from './user.routing';

import {LoginComponent} from './user-login/login.component'
import {MemberComponent} from './user-console/member.component'


@NgModule({
    declarations: [
        LoginComponent,
        MemberComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    exports: [],
    providers: []
})
export class UserModule {
}