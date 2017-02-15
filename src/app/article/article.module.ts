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
import {ResponsiveModule} from 'ng2-responsive'

import {ArticleRoutingModule} from './article.routing'
import {ShowdownComponent} from './showdown/showdown.component'
import {ArticleMainComponent} from './article-main/article-main.component'
import {ArticleListComponent} from './article-list/article-list.component'
import {ArticleDetailComponent} from './article-detail/article-detail.component'

@NgModule({
    declarations: [
        ArticleMainComponent,
        ShowdownComponent,
        ArticleListComponent,
        ArticleDetailComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        HttpModule,
        MomentModule,
        ArticleRoutingModule,
        ResponsiveModule
    ],
    exports: [ArticleMainComponent],
    providers: []
})
export class ArticleModule {
}