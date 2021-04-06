import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from '../draggable/draggable.directive';
import { MovableDirective } from '../draggable/movable.directive';
import { DraggableHelperDirective } from '../draggable/draggable-helper.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropzoneDirective } from './dropzone.directive';
import { DroppableDirective } from './droppable.directive';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [DraggableDirective, MovableDirective, DraggableHelperDirective, DropzoneDirective, DroppableDirective],
  exports: [DraggableDirective, MovableDirective, DraggableHelperDirective,DropzoneDirective, DroppableDirective]
})
export class DraggableModule { }
