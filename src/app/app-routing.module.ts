import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstromonListComponent } from './astromonList/astromonList.component';
import { AstromonDetailComponent } from './astromonDetail/astromonDetail.component';


const routes: Routes =[

  {path: 'astromon', children: [
    {path : '', component: AstromonListComponent},
    {path : ':name/:element', component: AstromonDetailComponent},
  ]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
