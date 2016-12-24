import {Component, ElementRef, ViewChild, Input, Output, AfterViewInit, EventEmitter} from '@angular/core'
const SimpleMDE: any = require('simplemde')

@Component({
    selector: 'app-article-editor',
    templateUrl: './article-editor.component.html',
    styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements AfterViewInit {

    constructor (){
    }

    @ViewChild('simplemde') textarea: ElementRef

    @Input() text: string
    @Output() mdChange = new EventEmitter<any>()

    ngAfterViewInit (){
        const simplemde = new SimpleMDE({
            element: this.textarea.nativeElement,
            showIcons: ["code", "table"],
            placeholder: '撰写正文内容',
        })
        simplemde.codemirror.on("change", () => this.mdChange.emit(simplemde.value()));
    }

}
