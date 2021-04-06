import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalWebRoutingModule } from './external-web-routing.module';
import { WebHomeComponent } from './web-home/web-home.component';
import { HomeModule } from '../_home/home.module';

@NgModule({
  imports: [
    CommonModule,
    ExternalWebRoutingModule,
    HomeModule
  ],
  declarations: [WebHomeComponent]
})
export class ExternalWebModule { }
