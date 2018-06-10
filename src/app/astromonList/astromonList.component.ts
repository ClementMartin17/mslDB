import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: "msl-list",

  templateUrl: "./astromonList.component.html",
  styleUrls: ["./astromonList.component.css"],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ 

        query(':enter', [
          style({ opacity: 0 }),
          stagger(5, [
            animate('0.2s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]




})
export class AstromonListComponent implements OnInit {
  title = "app";
  list: any;
  searchName:string;
  searchElement= "all";
  searchSort:string;
  searchEvo=1;
  searchVariant=false;
  constructor(private http: HttpClient) {}

  ngOnInit() {     
    this.http.get('http://localhost:3000/astromons')
    .subscribe(data => {
      this.list = data;
    });
  }
}
