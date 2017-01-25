/**
 * Created by WittBulter on 16/8/17.
 */

import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {HomeComponent} from './home/home.component'


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'welcome', component: HomeComponent},
    {path: 'articles', loadChildren: 'app/article/article.module#ArticleModule', data: {preload: true}},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule', data: {preload: true}},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}