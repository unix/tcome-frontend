/**
 * Created by WittBulter on 2017/1/28.
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AdminService} from '../../shared/service/admin'

import {ConsoleMainComponent} from './console-main/console-main.component'
import {ConsoleSubjectComponent} from './console-subject/console-subject.component'
import {ConsoleWriteComponent} from './console-write/console-write.component'
import {ConsoleReplyComponent} from './console-reply/console-reply.component'
import {ConsoleSettingComponent} from './console-setting/console-setting.component'

export const consoleRoutes: Routes = [{
    path: '', component: ConsoleMainComponent,
    children: [{
        path: '', redirectTo:'login',pathMatch:'full'
    },{
        path: 'subject', component: ConsoleSubjectComponent
    },{
        path: 'subject/append/:id', component: ConsoleWriteComponent
    },{
        path: 'write', component: ConsoleWriteComponent
    },{
        path: 'reply', component: ConsoleReplyComponent
    },{
        path: 'setting', component: ConsoleSettingComponent
    },{
        path: 'admin',
        loadChildren: './console-admin/admin.module#AdminModule',
        data: {preload: true},
        canActivate: [AdminService],
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(consoleRoutes)],
    exports: [RouterModule]
})
export class ConsoleRoutingModule {
}