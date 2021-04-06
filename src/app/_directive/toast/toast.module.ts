import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastDirective } from './toast.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToastDirective],
  exports:[ToastDirective]
})
export class ToastModule { }
