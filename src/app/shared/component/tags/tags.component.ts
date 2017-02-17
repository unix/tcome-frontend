import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

    constructor (){
    }

    @Input()
    public active: boolean = false

    @Output()
    public tags: string[] = []

    private errorMessage: string = ''
    private saveTags: string[] = []
    private tagValue: string

    addTag (e: any){
        this.errorMessage = ''
        if (e.keyCode !== 13|| !this.tagValue) return ;
        if (this.tagValue.length < 2|| this.tagValue.length > 8) return this.errorMessage = '注意：标签名长度不规范！';
        if (this.tagValue.includes(' ')) return this.errorMessage = '注意：标签名请勿包含空白！';
        if (this.saveTags.find(v => v == this.tagValue)) return this.errorMessage = '该标签已添加.';
        if (this.saveTags.length >= 3) return this.errorMessage = '注意：最多添加三个标签！';
        this.saveTags.push(this.tagValue)
        this.tagValue = ''
    }

    submitTags (isAccept: boolean){
        if (isAccept){
            this.tags = this.saveTags
        }
        this.saveTags = []
        this.active = false
    }

    ngOnInit (){

    }

}
