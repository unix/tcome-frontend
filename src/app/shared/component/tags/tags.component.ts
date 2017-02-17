import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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

    @Input()
    public init: string[] = []

    @Output()
    public tagsChange = new EventEmitter<any>()

    private errorMessage: string = ''
    private tagValue: string

    addTag (e: any){
        this.errorMessage = ''
        if (e.keyCode !== 13|| !this.tagValue) return ;
        if (this.tagValue.length < 2|| this.tagValue.length > 8) return this.errorMessage = '注意：标签名长度不规范！';
        if (this.tagValue.includes(' ')) return this.errorMessage = '注意：标签名请勿包含空白！';
        if (this.init.find(v => v == this.tagValue)) return this.errorMessage = '该标签已添加.';
        if (this.init.length >= 3) return this.errorMessage = '注意：最多添加三个标签！';
        this.init.push(this.tagValue)
        this.tagValue = ''
    }

    submitTags (isAccept: boolean){
        this.tagsChange.emit(isAccept? this.init: false)

        this.init = []
        this.tagValue = ''
    }

    ngOnInit (){

        console.log(123123);
    }

}
