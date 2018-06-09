import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Filter } from "../class/filter";

@Component({
  selector: "msl-list",

  templateUrl: "./astromonList.component.html",
  styleUrls: ["./astromonList.component.css"]
})
export class AstromonListComponent implements OnInit {
  title = "app";
  list: any;
  searchName:string;
  searchElemen:string;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {     
    this.http.get('http://localhost:3000/astromons')
    .subscribe(data => {
      this.list = data;
    });
  }
}
