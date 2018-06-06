import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {sprintf} from 'sprintf-js';

@Component({
  selector: 'msl-detail',
  templateUrl: './astromonDetail.component.html',
  styleUrls: ['./astromonDetail.component.css']
})
export class AstromonDetailComponent implements OnInit {
  constructor(private location: Location, private route: ActivatedRoute) {}

  text: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
     const name = params['name'];
     const string = 'je suis %s';
      this.text = sprintf(string, name);
    });
  }
  goBack() {
    this.location.back();
  }
}
