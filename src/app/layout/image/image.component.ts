import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msl-img',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{
    @Input() star: number;
    @Input() name: string;
    @Input() element : string;
    @Input() height: number;

    ngOnInit(){


    }
}
