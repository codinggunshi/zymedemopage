import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputRoundComponent),
  multi: true
};

const noop = () => {
};

@Component({
  selector: 'app-input-round',
  templateUrl: './input-round.component.html',
  styleUrls: ['./input-round.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputRoundComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() placeholder: string = 'Search';
  @Input() padding: number;
  @Input() mask: string = '';
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

  @ViewChild('inputDiv') inputElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.padding) {
      this.inputElementRef.nativeElement.style.padding = this.padding + 'rem 2rem';
    }
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
