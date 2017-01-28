/**
 * Created by WittBulter on 2017/1/25.
 * @description :: article module
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {MomentModule} from 'angular2-moment'
import {SharedModule} from '../shared/shared.module'

import {ArticleRoutingModule} from './article.routing'
import {ShowdownComponent} from './showdown/showdown.component'
import {ArticleMainComponent} from './article-main/article-main.component'
import {ArticleListComponent} from './article-list/article-list.component'
import {DetailComponent} from './detail/detail.component'

@NgModule({
    declarations: [
        ArticleMainComponent,
        ShowdownComponent,
        ArticleListComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,
        MomentModule,
        ArticleRoutingModule
    ],
    exports: [ArticleMainComponent],
    providers: []
})
export class ArticleModule {
}