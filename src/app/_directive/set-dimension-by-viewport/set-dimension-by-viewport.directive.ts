import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetDimensionByViewport]'
})
export class SetDimensionByViewportDirective {
  
  screenHeight: number;
  screenWidth: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.setDimension();
  }
  
  @HostListener('window:resize', ['$event'])
    setDimension() {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      this.renderer.setStyle(this.el.nativeElement, 'width', `${this.screenWidth * .7}px`);
      this.renderer.setStyle(this.el.nativeElement, 'height', `${this.screenHeight * .9}px`);
  }

}
