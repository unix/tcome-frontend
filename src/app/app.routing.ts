/**
 * Created by WittBulter on 16/8/17.
 */

import { Routes, RouterModule } from '@angular/router'
import { ListComponent } from "./list/list.component";


/**
 *
 * @type {{path: string; component: SessionComponent}[]}
 */
const appRoutes: Routes = [
    {path: '', component: ListComponent},
]

/**
 *
 * @type {Array}
 */
export const appRoutingProviders: any = []
export const routing = RouterModule.forRoot(appRoutes)