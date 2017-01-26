import {Component, ElementRef, ViewChild, Input, Output, AfterViewInit, EventEmitter} from '@angular/core'

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

    @Input() text: string
    @Output() mdChange = new EventEmitter<any>()

    ngAfterViewInit() {
        const simplemde = new SimpleMDE({
            element: this.textarea.nativeElement,
            showIcons: ["code", "table"],
            placeholder: '开始一次评论',
            toolbar: false,
            autoDownloadFontAwesome: false,
            spellChecker: false,
            status: false,
        })
        simplemde.codemirror.on("change", () => this.mdChange.emit(simplemde.value()));
    }

}
