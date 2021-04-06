import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appVideo]'
})
export class VideoDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 
  }

  ngOnInit() {
    this.elementRef.nativeElement.muted = true;

    this.renderer.listen(this.elementRef.nativeElement, 'loadeddata', (event) => {
      //console.log('video loaded');
      //to do later, hide loading screen when video loaded
    })
  }
  
}
