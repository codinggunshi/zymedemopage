import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  exportAs: 'appRipple'
})
export class RippleDirective {

  @Input('rippleColor') public color = '#ffffff';

  //Should be the same as animation duration
  @Input('rippleTimeout') public timeout = 1500;

  rippleElementSize: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }

  @HostListener('click', ['$event']) click(e: PointerEvent) {
    e.preventDefault();
    this.rippleElementSize = Math.max(this.el.nativeElement.offsetWidth, this.el.nativeElement.offsetHeight);
    const div = this.renderer.createElement('div');
    const btnOffset = RippleDirective.offset(this.el.nativeElement);
    const position = RippleDirective.findPosition(e, btnOffset, this.rippleElementSize);
    this.applyStyle(div, position);
    this.removeRippleClasses(div);
  }

  private removeRippleClasses(div: ElementRef) {
    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, div);
    }, this.timeout - 20 );
  }

  private applyStyle(el, position) {
    this.renderer.addClass(el, 'ripple-directive__effect');
    this.renderer.setStyle(el, 'top', `${ position.y }px`);
    this.renderer.setStyle(el, 'left', `${ position.x }px`);
    this.renderer.setStyle(el, 'width', `${this.rippleElementSize}px`);
    this.renderer.setStyle(el, 'height', `${this.rippleElementSize}px`);
    this.renderer.setStyle(el, 'background', this.color);
    this.renderer.appendChild(this.el.nativeElement, el);
  }

  static offset(elt) {
    const rect = elt.getBoundingClientRect(), bodyElt = document.body;
    return {
      top: rect.top + bodyElt.scrollTop,
      left: rect.left + bodyElt.scrollLeft
    };
  }

  static findPosition(e, btnOffset, rippleElementSize) {
    const xPos = e.pageX - btnOffset.left;
    const yPos = e.pageY - btnOffset.top;
    return { x: xPos - rippleElementSize / 2, y: yPos - rippleElementSize / 2 };
  }
}


