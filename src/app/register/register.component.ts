import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor (){
    }

    public username: string = ''
    public email: string = ''
    public password: string = ''

    register (){

    }

    ngOnInit (){
    }

}
