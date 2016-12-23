import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {MaterialModule} from '@angular/material'
import {MomentModule} from 'angular2-moment'
import {LockerModule, Locker, LockerConfig, DRIVERS} from 'angular2-locker'

import {MdeditorComponent} from './lib/component/mdeditor';
import {BackComponent} from './lib/component/back'
import {BreadcrumbComponent} from './lib/component/breadcrumb'

import {AppComponent} from './app.component'
import {AppRoutingModule} from './app.routing'
import {ListComponent} from './list/list.component'
import {MenuComponent} from './menu/menu.component'
import {DetailComponent} from './detail/detail.component'
import {HomeComponent} from './home/home.component';
import {LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './member/member.component';
import { ArticleCardComponent } from './member/article-card/article-card.component';
import { ArticleWriteComponent } from './member/article-write/article-write.component'

let lockerConfig = new LockerConfig('blog', DRIVERS.LOCAL, '-')

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        MenuComponent,
        MdeditorComponent,
        DetailComponent,
        BackComponent,
        HomeComponent,
        BreadcrumbComponent,
        LoginComponent,
        RegisterComponent,
        MemberComponent,
        ArticleCardComponent,
        ArticleWriteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot(),
        LockerModule.forRoot(lockerConfig),
        MomentModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor (
        private locker: Locker
    ){}
}
