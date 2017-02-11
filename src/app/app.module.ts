import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'
import {MomentModule} from 'angular2-moment'
import {ToastyModule} from 'ng2-toasty';
import {SharedModule} from './shared/shared.module'
import {ResponsiveModule, ResponsiveConfig} from 'ng2-responsive'

import {AppComponent} from './app.component'
import {AppRoutingModule} from './app.routing'
import {MenuComponent} from './menu/menu.component'
import {HomeComponent} from './home/home.component'
import {SearchComponent} from './search/search.component'
import {AuthService} from './shared/service/auth'
import {AdminService} from './shared/service/admin'
import {LockerService} from './shared/service/locker'

const config = {
    breakPoints: {
        xs: {max: 600},
        sm: {min: 601, max: 959},
        md: {min: 960, max: 1279},
        lg: {min: 1280, max: 1919},
        xl: {min: 1920}
    },
    debounceTime: 100
};

export function ResponsiveDefinition (){
    return new ResponsiveConfig(config);
}

@NgModule({
    imports: [
        ToastyModule.forRoot(),
        ResponsiveModule,
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
        SearchComponent,
    ],
    providers: [
        LockerService,
        AuthService,
        AdminService,
        {
            provide: ResponsiveConfig,
            useFactory: ResponsiveDefinition
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor (){
    }
}
