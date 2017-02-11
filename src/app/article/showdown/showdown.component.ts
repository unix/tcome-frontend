import {Component, Input, AfterViewInit, OnInit} from '@angular/core'

const Remarkable = require('remarkable')
const hljs = require('highlight.js')

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
        const md = new Remarkable({
            highlight: (str, lang) =>{
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (err) {}
                }
                try {
                    return hljs.highlightAuto(str).value;
                } catch (err) {

                }
                return ''
            }
        })
        this.innerHTML = md.render(this.html)
    }

}
