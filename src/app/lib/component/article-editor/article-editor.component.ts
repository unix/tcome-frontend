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
            autoDownloadFontAwesome: false,
            toolbar: [{
                name: "bold",
                action: SimpleMDE.toggleBold,
                className: "iconfont icon-jiacu1",
                title: "加粗",
            },{
                name: "italic",
                action: SimpleMDE.toggleItalic,
                className: "iconfont icon-xietiim",
                title: "斜体",
            },{
                name: "heading",
                action: SimpleMDE.toggleHeadingSmaller,
                className: "iconfont icon-iconfonth",
                title: "标题",
            }, "|", {
                name: "code",
                action: SimpleMDE.toggleCodeBlock,
                className: "iconfont icon-insert_tag_field",
                title: "代码",
            },{
                name: "quote",
                action: SimpleMDE.toggleBlockquote,
                className: "iconfont icon-quotation_marks",
                title: "引用",
            },{
                name: "unordered-list",
                action: SimpleMDE.toggleUnorderedList,
                className: "iconfont icon-richtextbulletedlist",
                title: "无序列表",
            },{
                name: "ordered-list",
                action: SimpleMDE.toggleOrderedList,
                className: "iconfont icon-richtextnumberedlist",
                title: "有序列表",
            }, "|", {
                name: "link",
                action: SimpleMDE.drawLink,
                className: "iconfont icon-link",
                title: "链接",
            },{
                name: "image",
                action: SimpleMDE.drawImage,
                className: "iconfont icon-image",
                title: "图片",
            },"|", {
                name: "preview",
                action: SimpleMDE.togglePreview,
                className: "iconfont icon-yulan2 no-disable",
                title: "预览",
            }
            ]
        })
        simplemde.codemirror.on("change", () => this.mdChange.emit(simplemde.value()));
    }

}
