/**
 * Created by WittBulter on 2017/1/25.
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {MdeditorComponent} from './component/mdeditor'
import {BackComponent} from './component/back'
import {BreadcrumbComponent} from './component/breadcrumb'
import {SanitizeHtmlPipe} from './pipe/sanitize/sanitize-html.pipe'
import {LocalDirective} from './directive/local'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SanitizeHtmlPipe,
        BackComponent,
        MdeditorComponent,
        BreadcrumbComponent,
        LocalDirective
    ],
    exports: [
        SanitizeHtmlPipe,
        BackComponent,
        MdeditorComponent,
        BreadcrumbComponent,
        LocalDirective
    ]
})

export class SharedModule {
}