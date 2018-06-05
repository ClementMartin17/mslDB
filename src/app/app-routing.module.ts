import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstromonListComponent } from './astrmonList/astromonList.component';


const routes: Routes =[
  {path : 'astromonList', component: AstromonListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
