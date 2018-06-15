import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Astromon } from "../class/astromon";

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
  searchName: string;
  searchElement = "all";
  searchSort: string;
  searchEvo = 1;
  searchVariant = false;
  compare = false;
  clickCounter = 1;
  firstAstromon: Astromon;
  secondAstromon: Astromon;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/astromons')
      .subscribe(data => {
        this.list = data;
      });
  }


  onClick(astromon: Astromon) {

    if (!this.compare) {
      this.router.navigate(['/astromon', astromon.astromon_id, astromon.element.toLocaleLowerCase()]);
    } else {
      if (this.clickCounter === 1) {
        this.firstAstromon = astromon
        localStorage.setItem('firstAstromon',JSON.stringify(this.firstAstromon))
        console.log(this.firstAstromon.astromon_id);
        this.clickCounter++;
      } else if (this.clickCounter === 2 && astromon != this.firstAstromon) {
        this.clickCounter = 1;
        this.secondAstromon = astromon       
        localStorage.setItem('secondAstromon',JSON.stringify(this.secondAstromon))
        this.router.navigate(['/astromon/compare']);
      }
    }
  }
}
