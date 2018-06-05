import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstromonListComponent } from './astrmonList/astromonList.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    AstromonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
