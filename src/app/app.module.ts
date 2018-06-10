import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstromonListComponent } from './astromonList/astromonList.component';
import { LayoutModule } from './layout/layout.module';
import { AstromonDetailComponent } from './astromonDetail/astromonDetail.component';
import { ChartsModule } from 'ng2-charts';
import { AstromonFilterPipe } from './pipe/astromonPipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AstromonListComponent,
    AstromonDetailComponent,
    AstromonFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
