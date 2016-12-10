import {Component, ElementRef, ViewChild, Input, AfterViewInit} from '@angular/core'

const SimpleMDE: any = require('simplemde')
@Component({
    selector: 'app-mdeditor',
    templateUrl: './mdeditor.component.html',
    styleUrls: ['./mdeditor.component.scss']
})
export class MdeditorComponent implements AfterViewInit {

    constructor() {
    }

    @ViewChild('simplemde') textarea: ElementRef

    @Input() text: string;

    ngAfterViewInit() {
        new SimpleMDE({
            element: this.textarea.nativeElement,
            showIcons: ["code", "table"]
        })
    }

}
