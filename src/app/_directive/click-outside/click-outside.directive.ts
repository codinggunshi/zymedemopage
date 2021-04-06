import { Directive, ElementRef, Output, EventEmitter, HostListener, NgZone, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef : ElementRef, public ngZone: NgZone, @Inject(DOCUMENT) public document: any) {}

  @Output() public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target']) public onClick(targetElement) {
    this.ngZone.runOutsideAngular(() => {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);   
      if (!clickedInside) {
        this.ngZone.run(() => {
          this.clickOutside.emit();
        });
      }
      this.document.removeEventListener('click', this.onClick);
    });
  }
}
