/**
 * Created by WittBulter on 2017/2/3.
 */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MomentModule} from 'angular2-moment'

import {AdminRoutingModule} from './admin.routing'
import {AdminMainComponent} from './admin-main/admin-main.component'
import {AdminMenuComponent} from './admin-menu/admin-menu.component'
import {AdminCheckComponent} from './admin-check/admin-check.component'
import {AdminMemberComponent} from './admin-member/admin-member.component'
import {AdminOptionComponent} from './admin-option/admin-option.component'
import {AdminRecommendComponent} from './admin-recommend/admin-recommend.component'


@NgModule({
    declarations: [
        AdminMainComponent,
        AdminMenuComponent,
        AdminCheckComponent,
        AdminMemberComponent,
        AdminOptionComponent,
        AdminRecommendComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        AdminRoutingModule
    ],
    exports: [AdminMainComponent],
    providers: []
})
export class AdminModule {
}