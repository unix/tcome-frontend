/**
 * Created by WittBulter on 2017/2/3.
 */
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {AdminMainComponent} from './admin-main/admin-main.component'
import {AdminMenuComponent} from './admin-menu/admin-menu.component'
import {AdminCheckComponent} from './admin-check/admin-check.component'
import {AdminMemberComponent} from './admin-member/admin-member.component'
import {AdminOptionComponent} from './admin-option/admin-option.component'
import {AdminRecommendComponent} from './admin-recommend/admin-recommend.component'

export const adminRoutes: Routes = [{
    path: '', component: AdminMainComponent,
    children: [{
        path: '', redirectTo:'menu',pathMatch:'full'
    },{
        path: 'menu', component: AdminMenuComponent
    },{
        path: 'check', component: AdminCheckComponent
    },{
        path: 'member', component: AdminMemberComponent
    },{
        path: 'option', component: AdminOptionComponent
    },{
        path: 'recommend', component: AdminRecommendComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}