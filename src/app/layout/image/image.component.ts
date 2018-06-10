import { Component, Input, OnInit } from '@angular/core';
import {sprintf} from 'sprintf-js';
@Component({
  selector: 'msl-img',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{ 
    @Input() height: number;
    @Input() evo: number;
    @Input() astromon: any;
variantText:string;
passiveText:string;
activeText:string;
    ngOnInit(){
this.astromon;

this.activeText = sprintf(this.astromon.active.passive.text["en"],this.astromon.active.passive.values[0] ,this.astromon.active.passive.values[1] );
this.passiveText = sprintf(this.astromon.normal.passive.text["en"],this.astromon.normal.passive.values[0] ,this.astromon.normal.passive.values[1] );
this.variantText = sprintf(this.astromon.variant.text["en"],this.astromon.variant.values[0] ,this.astromon.variant.values[1] );
    }
}
