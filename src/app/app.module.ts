import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'
import {MaterialModule} from '@angular/material'
import {MomentModule} from 'angular2-moment'
import {ToastyModule} from 'ng2-toasty';
import {LockerModule, DRIVERS, Locker} from 'angular-safeguard'
import {SharedModule} from './shared/shared.module'

import {ArticleModule} from './article/article.module'
import {UserModule} from './user/user.module'

import {AppComponent} from './app.component'
import {AppRoutingModule} from './app.routing'
import {MenuComponent} from './menu/menu.component'
import {HomeComponent} from './home/home.component';


const lockerConfig = {
    driverNamespace: 'blog',
    defaultDriverType: DRIVERS.LOCAL,
    namespaceSeperator: '-'
}
@NgModule({
    imports: [
        SharedModule,
        BrowserModule,
        RouterModule,
        HttpModule,
        AppRoutingModule,
        // MaterialModule.forRoot(),
        ToastyModule.forRoot(),
        LockerModule.withConfig(lockerConfig),
        MomentModule,
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        // ArticleModule,
        // UserModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor (private locker: Locker){
    }
}
