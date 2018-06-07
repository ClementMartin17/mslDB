import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
    // this.list = ["mona", "latt", "miho"];
    this.http.get('http://localhost:3000/astromons')
    .subscribe(data => {
      this.list = data;
    });
  }
}
