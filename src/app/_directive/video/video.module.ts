import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDirective } from './video.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoDirective],
  exports:[VideoDirective]
})
export class VideoModule { }
