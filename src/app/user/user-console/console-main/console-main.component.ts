import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-console-main',
  templateUrl: './console-main.component.html',
  styleUrls: ['./console-main.component.scss']
})
export class ConsoleMainComponent implements OnInit {

  constructor (
      private titleService: Title,
  ){
  }

  ngOnInit (){
    this.titleService.setTitle('总览-维特博客')
  }

}
