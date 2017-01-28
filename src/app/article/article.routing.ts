/**
 * Created by WittBulter on 2017/1/25.
 * @description :: article route
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {ArticleMainComponent} from './article-main/article-main.component'
import {ArticleListComponent} from './article-list/article-list.component'
import {ArticleDetailComponent} from './article-detail/article-detail.component'

const userRoutes: Routes = [{
    path: '', component: ArticleMainComponent,
    children: [{
        path: '', redirectTo:'list',pathMatch:'full'
    },{
        path: 'list', component: ArticleListComponent
    },{
        path: 'list/:id', component: ArticleDetailComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule {
}