import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstromonListComponent } from './astromonList/astromonList.component';
import { LayoutModule } from './layout/layout.module';
import { AstromonDetailComponent } from './astromonDetail/astromonDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AstromonListComponent,
    AstromonDetailComponent
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
