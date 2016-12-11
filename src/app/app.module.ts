import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {MaterialModule} from '@angular/material'
import {MomentModule} from 'angular2-moment'

import {AppComponent} from './app.component'
import {ListComponent} from './list/list.component'

import {AppRoutingModule} from './app.routing'
import {MenuComponent} from './menu/menu.component'
import {DetailComponent} from './detail/detail.component';
import {MdeditorComponent} from './lib/component/mdeditor'

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        MenuComponent,
        MdeditorComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot(),
        MomentModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
