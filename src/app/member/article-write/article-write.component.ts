import {Component, OnInit} from '@angular/core'
import {MdeditorComponent} from '../../lib/component/mdeditor'

@Component({
    selector: 'app-article-write',
    templateUrl: './article-write.component.html',
    styleUrls: ['./article-write.component.scss']
})
export class ArticleWriteComponent implements OnInit {

    constructor (

    ){
    }

    public field = ''
    public mdValue: any = ''

    mdChange (mdValue: any){
        this.mdValue = mdValue
    }

    ngOnInit (){
    }

}
