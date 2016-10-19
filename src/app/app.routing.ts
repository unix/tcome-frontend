/**
 * Created by WittBulter on 16/8/17.
 */

import { Routes, RouterModule } from '@angular/router'
import { WelcomeComponent } from "./welcome/welcome.component";


/**
 *
 * @type {{path: string; component: SessionComponent}[]}
 */
const appRoutes: Routes = [
    {path: '', component: WelcomeComponent},
]

/**
 *
 * @type {Array}
 */
export const appRoutingProviders: any = []
export const routing = RouterModule.forRoot(appRoutes)