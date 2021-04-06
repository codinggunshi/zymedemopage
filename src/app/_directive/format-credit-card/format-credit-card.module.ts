import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PipeModule } from '../../_pipe/pipe.module';

import { FormatCreditCardDirective } from './format-credit-card.directive';

@NgModule({
  imports: [
    CommonModule,
    //PipeModule
  ],
  declarations: [FormatCreditCardDirective],
  exports: [FormatCreditCardDirective]
})
export class FormatCreditCardModule { }
