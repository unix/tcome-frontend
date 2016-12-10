/**
 * Created by WittBulter on 16/8/17.
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {ListComponent} from "./list/list.component";
import {DetailComponent} from './detail/detail.component'


/**
 *
 * @type {{path: string; component: SessionComponent}[]}
 */
const appRoutes: Routes = [
    {path: '', component: ListComponent},
    {path: 'article/:id', component: DetailComponent},
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