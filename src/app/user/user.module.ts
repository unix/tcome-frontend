/**
 * Created by WittBulter on 2017/1/25.
 * @description :: user module
 */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {UserRoutingModule} from './user.routing'
import {MomentModule} from 'angular2-moment'

import {LoginComponent} from './user-login/login.component'
import {MemberComponent} from './user-console/member.component'
import {ArticleEditorComponent} from './user-console/article-editor/article-editor.component'
import {ArticleCardComponent} from './user-console/article-card/article-card.component'
import {ArticleWriteComponent} from './user-console/article-write/article-write.component'


@NgModule({
    declarations: [
        LoginComponent,
        MemberComponent,
        ArticleEditorComponent,
        ArticleCardComponent,
        ArticleWriteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        UserRoutingModule
    ],
    exports: [LoginComponent],
    providers: []
})
export class UserModule {
}