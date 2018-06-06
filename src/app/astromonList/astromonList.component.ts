import { Component, OnInit} from '@angular/core';
declare module String{
  export var format:any;
}

@Component({
  selector: 'msl-list',
  templateUrl: './astromonList.component.html',
  styleUrls: ['./astromonList.component.css']
})
export class AstromonListComponent implements OnInit{
  title = 'app';
  astromon:any;
  list: any;
  text:string;
ngOnInit(){

  const format = 'je suis {0}'
 // this.text = String.format('je suis {0}', 'mona')
this.list = ['mona','mona','mona','mona','mona','mona','miho','mona','mona','mona','mona','mona','mona','mona']
}
}
