import {Pipe, PipeTransform} from '@angular/core'
import {DomSanitizer, SafeStyle} from '@angular/platform-browser'

@Pipe({
    name: 'safeStyle'
})
export class SafeStylePipe implements PipeTransform {
    constructor (private domSanitizer: DomSanitizer){
    }

    transform (value: any, args?: any): SafeStyle{
        return this.domSanitizer.bypassSecurityTrustStyle(value)
    }

}
