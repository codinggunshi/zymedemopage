import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetDimensionByViewportDirective } from './set-dimension-by-viewport.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SetDimensionByViewportDirective],
  exports: [SetDimensionByViewportDirective]
})
export class SetDimensionByViewportModule { }
