import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

import { ZipCodePipe } from '../../_pipe/zip-code.pipe';

@Directive({
  selector: '[appFormatZipCode]'
})
export class FormatZipCodeDirective {

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter()

  constructor(private zipCodePipe: ZipCodePipe) { }

  @HostListener('keydown', ['$event', "$event.target.value"])
  onKeyDown(e: KeyboardEvent, value: string) {
    if (
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||  // Allow: Delete, Backspace, Tab, Escape, Enter
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return;
    }
    if (value.length === 10 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  @HostListener("keyup", ["$event.target.value"])
  onKeyup(value) {
    let formattedValue = this.zipCodePipe.transform(value);
    this.ngModelChange.emit(formattedValue);
  }

}
