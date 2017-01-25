/**
 * Created by WittBulter on 16/8/17.
 */

import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {HomeComponent} from './home/home.component'


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'welcome', component: HomeComponent},
    // {path: 'articles/:id', component: DetailComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'register', component: RegisterComponent},
    // {path: 'register/:id/:token', component: RegisterComponent},
    {path: 'articles', loadChildren: 'app/article/article.module#ArticleModule'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}