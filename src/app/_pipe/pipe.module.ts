import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardPipe } from './credit-card.pipe';
import { ZipCodePipe } from './zip-code.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreditCardPipe, ZipCodePipe],
  exports: [CreditCardPipe, ZipCodePipe]
})
export class PipeModule { }
