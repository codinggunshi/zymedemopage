import { Directive, OnInit, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { DroppableService } from './droppable.service';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective implements OnInit {
  @HostBinding('class.dropzone-activated') activated = false;
  @HostBinding('class.dropzone-entered') entered = false;

  @Output() dropped = new EventEmitter<PointerEvent>();

  @HostListener('pointerenter') onPointerEnter(): void {
    if(!this.activated) {
      return;
    }
    this.entered = true;
  }

  @HostListener('pointerleave') onPointerLeave(): void {
    if(!this.activated) {
      return;
    }
    this.entered = false;
    
  }

  constructor(private droppableService: DroppableService) { }

  ngOnInit(): void {
    this.droppableService.dragStart$.subscribe(() => this.onDragStart());
    this.droppableService.dragEnd$.subscribe(event => this.onDragEnd(event));
  }

  private onDragStart(): void {
    this.activated = true;
  }

  private onDragEnd(event: PointerEvent): void {
    if(this.entered) {
      this.dropped.emit(event);
    }
    this.activated = false;
    this.entered = false;
  }

}
