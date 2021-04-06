import {
  Input,
  Output,
  OnInit,
  OnDestroy,
  Renderer2,
  Component,
  EventEmitter,
  HostListener,
  ChangeDetectorRef, ViewChild, ElementRef,
} from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() public closable: boolean = true;
  @Input() public escapable: boolean = true;
  @Input() public dismissable: boolean = true;
  @Input() public identifier: string = '';
  @Input() public customClass: string = 'nsm-centered';
  @Input() public visible: boolean = false;
  @Input() public backdrop: boolean = true;
  @Input() public force: boolean = true;
  @Input() public hideDelay: number = 500;
  @Input() public autostart: boolean = false;
  @Input() public target: any;

  @Output() public visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onClose: EventEmitter<any> = new EventEmitter();
  @Output() public onCloseFinished: EventEmitter<any> = new EventEmitter();
  @Output() public onDismiss: EventEmitter<any> = new EventEmitter();
  @Output() public onDismissFinished: EventEmitter<any> = new EventEmitter();
  @Output() public onAnyCloseEvent: EventEmitter<any> = new EventEmitter();
  @Output() public onAnyCloseEventFinished: EventEmitter<any> = new EventEmitter();
  @Output() public onOpen: EventEmitter<any> = new EventEmitter();
  @Output() public onEscape: EventEmitter<any> = new EventEmitter();
  @Output() public onDataAdded: EventEmitter<any> = new EventEmitter();
  @Output() public onDataRemoved: EventEmitter<any> = new EventEmitter();

  public layerPosition: number = 1041;
  public overlayVisible: boolean = false;
  public openedClass: boolean = false;

  private _data: any;

  @ViewChild('contentDiv') private content: ElementRef | undefined;
  @ViewChild('dialogDiv') private dialog: ElementRef | undefined;
  @ViewChild('overlayDiv') private overlay: ElementRef | undefined;

  constructor(
    private _renderer: Renderer2,
    private _changeDetectorRef: ChangeDetectorRef,
    private _ngxSmartModalService: ModalService
  ) {
  }

  public ngOnInit() {
    if (!!this.identifier && this.identifier.length) {
      this.layerPosition += this._ngxSmartModalService.getModalStackCount();
      this._ngxSmartModalService.addModal({ id: this.identifier, modal: this }, this.force);

      if (this.autostart) {
        this._ngxSmartModalService.open(this.identifier);
      }
    } else {
      throw new Error('identifier field isn’t set. Please set one before calling <app-modal> in a template.');
    }
  }

  public ngOnDestroy() {
    this._ngxSmartModalService.removeModal(this.identifier);
    window.removeEventListener('keyup', this.escapeKeyboardEvent);
  }

  public open(top?: boolean): void {
    if (top) {
      this.layerPosition = this._ngxSmartModalService.getHigherIndex();
    }

    this.overlayVisible = true;
    this.visible = true;

    setTimeout(() => {
      this.openedClass = true;

      if (this.target) {
        this.targetPlacement();
      }

      this._changeDetectorRef.markForCheck();
    });

    this.onOpen.emit(this);

    if (this.escapable) {
      window.addEventListener('keyup', this.escapeKeyboardEvent);
    }
  }

  public close(): void {
    const me = this;

    this.openedClass = false;
    this.onClose.emit(this);
    this.onAnyCloseEvent.emit(this);

    setTimeout(() => {
      me.visibleChange.emit(me.visible);
      me.visible = false;
      me.overlayVisible = false;
      me._changeDetectorRef.markForCheck();
      me.onCloseFinished.emit(me);
      me.onAnyCloseEventFinished.emit(me);
    }, this.hideDelay);

    window.removeEventListener('keyup', this.escapeKeyboardEvent);
  }

  public dismiss(e: any): void {
    const me = this;

    if (!this.dismissable) {
      return;
    }

    if (e.target.classList.contains('overlay')) {
      this.openedClass = false;
      this.onDismiss.emit(this);
      this.onAnyCloseEvent.emit(this);

      setTimeout(() => {
        me.visible = false;
        me.visibleChange.emit(me.visible);
        me.overlayVisible = false;
        me._changeDetectorRef.markForCheck();
        me.onDismissFinished.emit(me);
        me.onAnyCloseEventFinished.emit(me);
      }, this.hideDelay);

      window.removeEventListener('keyup', this.escapeKeyboardEvent);
    }
  }

  public toggle(top?: boolean) {
    if (this.visible) {
      this.close();
    } else {
      this.open(top);
    }
  }

  public addCustomClass(className: string): void {
    if (!this.customClass.length) {
      this.customClass = className;
    } else {
      this.customClass += ' ' + className;
    }
  }

  public removeCustomClass(className?: string): void {
    if (className) {
      this.customClass = this.customClass.replace(className, '').trim();
    } else {
      this.customClass = '';
    }
  }

  public isVisible(): boolean {
    return this.visible;
  }

  public hasData(): boolean {
    return this._data !== undefined;
  }

  public setData(data: any, force?: boolean): any {
    if (!this.hasData() || (this.hasData() && force)) {
      this._data = data;
      this.onDataAdded.emit(this._data);
      this._changeDetectorRef.markForCheck();
    }
  }

  public getData(): any {
    return this._data;
  }

  public removeData(): void {
    this._data = undefined;
    this.onDataRemoved.emit(true);
    this._changeDetectorRef.markForCheck();
  }

  public escapeKeyboardEvent = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      this.onEscape.emit(this);
      this._ngxSmartModalService.closeLatestModal();
    }
  }

  @HostListener('window:resize')
  public targetPlacement() {
    if (!this.dialog || !this.content || !this.overlay || !this.target) {
      return;
    }

    const targetElementRect = document.querySelector(this.target).getBoundingClientRect();
    const bodyRect = this.overlay.nativeElement.getBoundingClientRect();

    const nsmContentRect = this.content.nativeElement.getBoundingClientRect();
    const nsmDialogRect = this.dialog.nativeElement.getBoundingClientRect();

    const marginLeft = parseInt(getComputedStyle(this.content.nativeElement).marginLeft as any, 10);
    const marginTop = parseInt(getComputedStyle(this.content.nativeElement).marginTop as any, 10);

    let offsetTop = targetElementRect.top - nsmDialogRect.top - ((nsmContentRect.height - targetElementRect.height) / 2);
    let offsetLeft = targetElementRect.left - nsmDialogRect.left - ((nsmContentRect.width - targetElementRect.width) / 2);

    if (offsetLeft + nsmDialogRect.left + nsmContentRect.width + (marginLeft * 2) > bodyRect.width) {
      offsetLeft = bodyRect.width - (nsmDialogRect.left + nsmContentRect.width) - (marginLeft * 2);
    } else if (offsetLeft + nsmDialogRect.left < 0) {
      offsetLeft = -nsmDialogRect.left;
    }

    if (offsetTop + nsmDialogRect.top + nsmContentRect.height + marginTop > bodyRect.height) {
      offsetTop = bodyRect.height - (nsmDialogRect.top + nsmContentRect.height) - marginTop;
    }

    if (offsetTop < 0) {
      offsetTop = 0;
    }

    this._renderer.setStyle(this.content.nativeElement, 'top', offsetTop + 'px');
    this._renderer.setStyle(this.content.nativeElement, 'left', offsetLeft + 'px');
  }
}
