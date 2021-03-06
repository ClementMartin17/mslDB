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
  @Input() variant: boolean;

  variantText:string;
  passiveText:string;
  activeText:string;
  imagesName: any;
  ngOnInit() {
    this.astromon;

    this.imagesName = [
      this.astromon.name[this.evo - 1],
      this.evo === 1 ? this.astromon.name[1] : this.astromon.name[0],
      this.evo === 3 ? this.astromon.name[0] : this.astromon.name[2]
    ]

    this.activeText = getFormattedTxt(this.astromon.active.passive.text["en"], this.astromon.active.passive.values);
    this.passiveText = getFormattedTxt(this.astromon.normal.passive.text["en"], this.astromon.normal.passive.values);
    this.variantText = getFormattedTxt(this.astromon.variant.text["en"], this.astromon.variant.values);
  }
}

function getFormattedTxt(text, values) {
  var sprintfParams = [];

  if (values.length === 0)
    return text;

  sprintfParams.push(text);
  for (var i = 0; i < values.length; i++) {
    sprintfParams.push(values[i]);
  }
  return sprintf.apply(this, sprintfParams);
}
