import {Component, OnInit} from '@angular/core'
import {ArticleEditorComponent} from '../../lib/component/article-editor'

@Component({
    selector: 'app-article-write',
    templateUrl: './article-write.component.html',
    styleUrls: ['./article-write.component.scss']
})
export class ArticleWriteComponent implements OnInit {

    constructor (

    ){
    }

    public mdValue: any = ''

    mdChange (mdValue: any){
        this.mdValue = mdValue
    }

    ngOnInit (){
    }

}
