import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../_home/home.component';

const webRoutes: Routes = [
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(webRoutes)],
  exports: [RouterModule]
})
export class ExternalWebRoutingModule { }
