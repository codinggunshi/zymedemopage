import { Directive, Input, HostListener, OnInit } from '@angular/core';
import { ToastComponent } from '../../components/core/toast/toast.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appToast]'
})
export class ToastDirective implements OnInit {
  @Input() toastMessage: string;

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {}

  ngOnInit() {
    this.overlayRef = this.overlay.create();
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    console.log(this.overlayRef);
    if(!this.overlayRef.hasAttached()) {
      let ToastComponentRef = this.overlayRef.attach(new ComponentPortal(ToastComponent));
      ToastComponentRef.instance.message = this.toastMessage;
      setTimeout(() => {
        this.overlayRef.detach();
      }, 3990);
    }
  }
}
 