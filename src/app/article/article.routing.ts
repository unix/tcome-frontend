/**
 * Created by WittBulter on 2017/1/25.
 * @description :: article route
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {ArticleMainComponent} from './article-main/article-main.component'
import {ListComponent} from './list/list.component'
import {DetailComponent} from './detail/detail.component'

const userRoutes: Routes = [{
    path: '', component: ArticleMainComponent,
    children: [{
        path: '', redirectTo:'list',pathMatch:'full'
    },{
        path: 'list', component: ListComponent
    },{
        path: 'list/:id', component: DetailComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule {
}