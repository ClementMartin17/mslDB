import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AstromonFilterPipe } from "../pipe/astromonPipe";

@Component({
  selector: "msl-list",

  templateUrl: "./astromonList.component.html",
  styleUrls: ["./astromonList.component.css"]
})
export class AstromonListComponent implements OnInit {
  title = "app";
  list: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {   
    this.http.get('http://localhost:3000/astromons')
    .subscribe(data => {
      this.list = data;
    });
  }
}
