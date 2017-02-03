/**
 * Created by WittBulter on 2017/1/28.
 */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MomentModule} from 'angular2-moment'

import {ConsoleRoutingModule} from './console.routing'
import {ConsoleMainComponent} from './console-main/console-main.component'
import {ConsoleEditorComponent} from './console-editor/console-editor.component'
import {ConsoleSubjectComponent} from './console-subject/console-subject.component'
import {ConsoleWriteComponent} from './console-write/console-write.component'
import {ConsoleReplyComponent} from './console-reply/console-reply.component'
import {ConsoleSettingComponent} from './console-setting/console-setting.component'


@NgModule({
    declarations: [
        ConsoleMainComponent,
        ConsoleEditorComponent,
        ConsoleSubjectComponent,
        ConsoleWriteComponent,
        ConsoleReplyComponent,
        ConsoleSettingComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        ConsoleRoutingModule
    ],
    exports: [ConsoleMainComponent],
    providers: []
})
export class ConsoleModule {
}