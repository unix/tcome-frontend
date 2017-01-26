import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'
import {MomentModule} from 'angular2-moment'
import {ToastyModule} from 'ng2-toasty';
import {SharedModule} from './shared/shared.module'

import {AppComponent} from './app.component'
import {AppRoutingModule} from './app.routing'
import {MenuComponent} from './menu/menu.component'
import {HomeComponent} from './home/home.component'
import {AuthService} from './shared/service/auth'
import {LockerService} from './shared/service/locker'

@NgModule({
    imports: [
        ToastyModule.forRoot(),
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        HttpModule,
        SharedModule,
        MomentModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
    ],
    providers: [
        LockerService,
        AuthService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor (){
    }
}
