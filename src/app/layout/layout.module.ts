import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "../app-routing.module";
import { StatisticComponent } from "./statistic/statistic.component";
import { ImageComponent } from "./image/image.component";
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    StatisticComponent,
    ImageComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    StatisticComponent,
    ImageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
    ],
  providers: [],

})
export class LayoutModule { }
