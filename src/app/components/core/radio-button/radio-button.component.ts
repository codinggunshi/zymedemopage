import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: any = this.label;
  @Input() scale: number = 1;
  @Input() checked: boolean = false;
  @Input() radioClass: string = '';

  @Output() selected = new EventEmitter<any>();
  @Output() deselected = new EventEmitter();

  @ViewChild('radioDiv') radioElementRef: ElementRef;
  @ViewChild('labelDiv') labelElementRef: ElementRef;

  defaultValue: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.scale !== 1) {
      this.radioElementRef.nativeElement.style.transform = 'scale(' + this.scale + ')';
      const left = 4 + (this.scale - 1) * 3;
      this.labelElementRef.nativeElement.style.paddingLeft = left + 'rem';
    }
  }

  toggleCheck() {
    this.checked = !this.checked;
    if(this.checked) {
      this.selected.emit(this.value);
    } else {
      this.deselected.emit();
    }
  }

}
