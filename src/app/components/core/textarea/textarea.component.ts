import { Component, OnInit, ViewChild, ElementRef, Input, forwardRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaComponent),
  multi: true
};

const noop = () => {
};

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
  remainingChar: number = 255;
  params: any;

  @Input() maxLength: number = 255;
  @Input() row: number = 6;
  @Input() textareaClass: string;
  get text(): any {
    return this.innerValue;
  };
  set text(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  private innerValue: any;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @ViewChild('textareaDiv') textareaElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event) {
    if(this.remainingChar <= 0) {
      event.preventDefault();
    } else {
      this.remainingChar = 255 - this.text.length;
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


  /********** Following part is for working with ag-grid */

  agInit(params: any): void {
    this.params = params;
  }

  afterGuiAttached() {
    this.textareaElementRef.nativeElement.focus();
    this.text = this.params.value;
  }

  getValue(): any {
    if(this.text !== undefined) {
      this.params.value = this.text;
    }
    return this.params.value;
  }

  isPopup() {
    return true;
  }

}
