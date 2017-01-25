/**
 * Created by WittBulter on 2017/1/25.
 * @description :: article module
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {MomentModule} from 'angular2-moment'

import {ArticleRoutingModule} from './article.routing'
import {ShowdownComponent} from './showdown/showdown.component'
import {ArticleMainComponent} from './article-main/article-main.component'
import {ListComponent} from './list/list.component'
import {DetailComponent} from './detail/detail.component'

@NgModule({
    declarations: [
        ArticleMainComponent,
        ShowdownComponent,
        ListComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        ArticleRoutingModule
    ],
    exports: [ArticleMainComponent],
    providers: []
})
export class ArticleModule {
}