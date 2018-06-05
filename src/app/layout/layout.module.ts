import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
  declarations: [ 
    NavbarComponent,
    FooterComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule
    ],
  providers: [],
 
})
export class LayoutModule { }
