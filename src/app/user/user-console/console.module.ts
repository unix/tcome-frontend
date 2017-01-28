/**
 * Created by WittBulter on 2017/1/28.
 */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MomentModule} from 'angular2-moment'
import {ConsoleRoutingModule} from './console.routing'

import {ConsoleMainComponent} from './console-main/console-main.component'


@NgModule({
    declarations: [
        ConsoleMainComponent
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