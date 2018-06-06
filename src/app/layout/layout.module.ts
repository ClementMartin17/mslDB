import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "../app-routing.module";
import { StatisticComponent } from "./statistic/statistic.component";


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    StatisticComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    StatisticComponent
  ],
  imports: [
    AppRoutingModule
    ],
  providers: [],

})
export class LayoutModule { }
