import {Component, ElementRef, ViewChild, Input, Output, AfterViewInit, EventEmitter, OnInit} from '@angular/core'

const Showdown:any = require('showdown')

@Component({
    selector: 'app-showdown',
    templateUrl: './showdown.component.html',
    styleUrls: ['./showdown.component.scss']
})
export class ShowdownComponent implements AfterViewInit {

    constructor (){
    }

    @Input() html: any
    public innerHTML: any

    ngAfterViewInit (){
        const converter = new Showdown.Converter()
        this.innerHTML = converter.makeHtml(this.html);
    }

}
