/**
 * Created by WittBulter on 2017/1/25.
 * @description :: article module
 */
import {NgModule} from '@angular/core';
import {ArticleRoutingModule} from './article.routing';

import {ListComponent} from './list/list.component'
import {DetailComponent} from './detail/detail.component'

@NgModule({
    declarations: [
        ListComponent,
        DetailComponent
    ],
    imports: [
        ArticleRoutingModule
    ],
    exports: [],
    providers: []
})
export class ArticleModule {
}