import {BrowserModule} from '@angular/platform-browser'
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



@NgModule({
    imports: [
        ToastyModule.forRoot(),
        BrowserModule,
        SharedModule,
        RouterModule,
        HttpModule,
        MomentModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor (){
    }
}
