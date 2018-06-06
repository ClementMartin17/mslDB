import { Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'msl-detail',
  templateUrl: './astromonDetail.component.html',
  styleUrls: ['./astromonDetail.component.css']
})
export class AstromonDetailComponent implements OnInit {
  constructor(private location: Location) {}
ngOnInit() {}
goBack() {
this.location.back();
}
}


