import {Directive, Input} from '@angular/core'

@Directive({
    selector: '[local]',
    exportAs: 'local'
})
export class LocalDirective {

    constructor (){
    }
    @Input() local: any

}
