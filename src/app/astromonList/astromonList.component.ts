import { Component, OnInit } from "@angular/core";
@Component({
  selector: "msl-list",
  templateUrl: "./astromonList.component.html",
  styleUrls: ["./astromonList.component.css"]
})
export class AstromonListComponent implements OnInit {
  title = "app";
  list: any;

  ngOnInit() {
    this.list = ["mona", "latt", "miho"];
  }
}
