import {Component, Input, AfterViewInit, OnInit} from '@angular/core'

const Showdown:any = require('showdown')

@Component({
    selector: 'app-showdown',
    templateUrl: './showdown.component.html',
    styleUrls: ['./showdown.component.scss']
})
export class ShowdownComponent implements OnInit {

    constructor (){
    }

    @Input() html: string = ''
    public innerHTML: any

    ngOnInit (){
        const converter = new Showdown.Converter()
        this.innerHTML = converter.makeHtml(this.html);
    }

}
