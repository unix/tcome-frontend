/**
 * Created by WittBulter on 2017/1/28.
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {ConsoleMainComponent} from './console-main/console-main.component'
import {ConsoleSubjectComponent} from './console-subject/console-subject.component'
import {ConsoleWriteComponent} from './console-write/console-write.component'


export const consoleRoutes: Routes = [{
    path: '', component: ConsoleMainComponent,
    children: [{
        path: '', redirectTo:'login',pathMatch:'full'
    },{
        path: 'subject', component: ConsoleSubjectComponent
    },{
        path: 'write', component: ConsoleWriteComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(consoleRoutes)],
    exports: [RouterModule]
})
export class ConsoleRoutingModule {
}