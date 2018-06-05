import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'astrmon-list',
  templateUrl: './astrmonList.component.html',
  styleUrls: ['./astrmonList.component.css']
})
export class AstrmonList implements OnInit{
  title = 'app';

  list: any

ngOnInit(){

this.list = ['mona','mona','mona','mona','mona','mona','miho','mona','mona','mona','mona','mona','mona','mona']
}
}
