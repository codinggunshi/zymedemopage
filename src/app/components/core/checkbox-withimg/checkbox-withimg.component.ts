import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkbox-withimg',
  templateUrl: './checkbox-withimg.component.html',
  styleUrls: ['./checkbox-withimg.component.scss']
})
export class CheckboxWithimgComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: any = this.label;
  @Input() scale: number = 1;
  @Input() checked: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() checkboxClass: string = '';

  @Output() selected = new EventEmitter<any>();
  @Output() deselected = new EventEmitter(); 

  @ViewChild('checkboxDiv') checkboxElementRef: ElementRef;
  @ViewChild('txt') labelElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.scale !== 1) {
      this.checkboxElementRef.nativeElement.style.transform = 'scale(' + this.scale + ')';
      const left = 4 + (this.scale - 1) * 3; //default size of check box is 3rem, default left property for label is 4rem
      this.labelElementRef.nativeElement.style.left = left + 'rem';
    }
  }

  toggleCheck() {
    this.checked = !this.checked;
    if (this.checked) {
      this.selected.emit(this.value);
    } else {
      this.deselected.emit();
    }
  }

}
