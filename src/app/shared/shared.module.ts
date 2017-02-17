/**
 * Created by WittBulter on 2017/1/25.
 */
import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {MdeditorComponent} from './component/mdeditor'
import {BackComponent} from './component/back'
import {PaginationComponent} from './component/pagination'
import {BreadcrumbComponent} from './component/breadcrumb'
import {CopyrightComponent} from './component/copyright'
import {TagsComponent} from './component/tags'
import {SanitizeHtmlPipe} from './pipe/sanitize'
import {SafeStylePipe} from './pipe/safe-style'
import {LocalDirective} from './directive/local'

import {StaticService} from './service/static'


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
        PaginationComponent,
        CopyrightComponent,
        TagsComponent,
        LocalDirective
    ],
    exports: [
        SanitizeHtmlPipe,
        SafeStylePipe,
        BackComponent,
        MdeditorComponent,
        BreadcrumbComponent,
        PaginationComponent,
        CopyrightComponent,
        TagsComponent,
        LocalDirective
    ],
    providers: [
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [StaticService]
        };
    }
}