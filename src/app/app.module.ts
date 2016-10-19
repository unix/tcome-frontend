import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {MaterialModule} from '@angular/material'

import {AppComponent} from './app.component'
import {ListComponent} from './list/list.component'

import {routing, appRoutingProviders} from './app.routing';
import { MenuComponent } from './menu/menu.component'

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MaterialModule.forRoot()
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
