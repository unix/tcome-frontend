/**
 * Created by WittBulter on 16/8/17.
 */

import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {ListComponent} from "./list/list.component"
import {DetailComponent} from './detail/detail.component'
import {HomeComponent} from './home/home.component'


/**
 *
 * @type {{path: string; component: SessionComponent}[]}
 */
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'articles', component: ListComponent},
    {path: 'articles/:id', component: DetailComponent},
    {path: 'welcome', component: HomeComponent}
]

/**
 *
 * @type {Array}
 */
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}