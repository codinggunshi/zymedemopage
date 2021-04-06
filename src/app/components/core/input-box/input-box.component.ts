import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputBoxComponent),
  multi: true
};

const noop = () => {
};

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputBoxComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() placeholder: string = 'Type Here';
  @Input() padding: number;
  @Input() showLabel: boolean = true;;
  @Input() items: any[];
  @Input() searchDropdown: boolean = false;
  @Input() type: string;
  @Input() mask: string = '';
  @Input() inputBoxClass = "";
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() minlength: number = 0;
  @Input() pattern: string;
  get value(): any {
    return this.innerValue;
  };
  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  private innerValue: any;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  displayItems: any[] = [];

  @ViewChild('inputDiv') inputElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.padding) {
      this.inputElementRef.nativeElement.style.padding = this.padding + 'rem 2rem'; 
    }
  }

  onModelChanged() {
    if(!this.searchDropdown) {
      return;
    }

    if(this.value.length === 0) {
      this.displayItems = [];
      return;
    }
    let tmp = [];
    for(var i=0; i<this.items.length; i++) {
      if(this.items[i].label.toUpperCase().includes(this.value.toUpperCase())) {
        tmp.push(this.items[i]);
      }
    }
    this.displayItems = tmp;
  }

  itemSelected(label) {
    this.value = label;
    this.displayItems = [];
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
