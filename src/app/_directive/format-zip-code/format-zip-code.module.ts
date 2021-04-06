import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatZipCodeDirective } from './format-zip-code.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormatZipCodeDirective],
  exports: [FormatZipCodeDirective]
})
export class FormatZipCodeModule { }
