import { Directive, HostBinding, HostListener, Output, EventEmitter, ElementRef, NgZone, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appDraggable], [appDroppable]'
})
export class DraggableDirective {
  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  @HostBinding('class.drag-drop-draggable') draggable = true;
  @HostBinding('class.drag-drop-dragging') dragging = false;

  pointerMoveHandler: any;
  pointerUpHandler: any;

  @HostListener('pointerdown', ['$event']) onpointerdown(event: PointerEvent): void {
    this.dragging = true;
    event.stopPropagation();

    this.pointerMoveHandler = this.onPointerMove.bind(this);
    this.ngZone.runOutsideAngular(() => {
      this.document.addEventListener('pointermove', this.pointerMoveHandler);
    });

    this.dragStart.emit(event);

    this.pointerUpHandler = this.onPointerUp.bind(this);
    this.ngZone.runOutsideAngular(() => {
      this.document.addEventListener('pointerup', this.pointerUpHandler);
    });
  }

  onPointerMove(event: PointerEvent): void {
    if(!this.dragging) {
      return;
    }
    this.dragMove.emit(event);
  }

  onPointerUp(event: PointerEvent): void {
    if(!this.dragging) {
      return;
    }

    this.document.removeEventListener('pointermove', this.pointerMoveHandler);
    this.document.removeEventListener('pointerup', this.pointerUpHandler);

    this.ngZone.run(() => {
      this.dragging = false;
      this.dragEnd.emit(event);
    });
  }

  constructor(public element: ElementRef, public ngZone: NgZone, @Inject(DOCUMENT) public document: any) { }

}
