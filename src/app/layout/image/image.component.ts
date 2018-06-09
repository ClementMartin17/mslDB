import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msl-img',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{ 
    @Input() height: number;
    @Input() evo: number;
    @Input() astromon: any;

    ngOnInit(){
this.astromon;

    }
}
