/**
 * Created by WittBulter on 2017/1/25.
 * @description :: article module
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ArticleRoutingModule} from './article.routing';

import {ListComponent} from './list/list.component'
import {DetailComponent} from './detail/detail.component'

@NgModule({
    declarations: [
        ListComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        ArticleRoutingModule
    ],
    exports: [],
    providers: []
})
export class ArticleModule {
}