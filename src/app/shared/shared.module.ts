/**
 * Created by WittBulter on 2017/1/25.
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {MdeditorComponent} from './component/mdeditor'
import {BackComponent} from './component/back'
import {BreadcrumbComponent} from './component/breadcrumb'
import {SanitizeHtmlPipe} from './pipe/sanitize'
import {SafeStylePipe} from './pipe/safe-style'
import {LocalDirective} from './directive/local'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SanitizeHtmlPipe,
        SafeStylePipe,
        BackComponent,
        MdeditorComponent,
        BreadcrumbComponent,
        LocalDirective
    ],
    exports: [
        SanitizeHtmlPipe,
        SafeStylePipe,
        BackComponent,
        MdeditorComponent,
        BreadcrumbComponent,
        LocalDirective
    ]
})

export class SharedModule {
}