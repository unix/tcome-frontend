import {Component, OnInit} from '@angular/core'
let a =  require('simplemde')

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log(a);
        // let simplemde = new SimpleMDE()
    }

}
