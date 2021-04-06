import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ag-grid-input-validate',
  templateUrl: './ag-grid-input-validate.component.html',
  styleUrls: ['./ag-grid-input-validate.component.scss']
})
export class AgGridInputValidateComponent implements OnInit {
  params: any;
  value: string;
  rule: string;

  @ViewChild('input') inputElementRef: ElementRef;

  @Output() guiAttached = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  afterGuiAttached() {
    this.guiAttached.emit();
    this.inputElementRef.nativeElement.focus();
  }

  agInit(params: any): void {
    this.rule = params.rules;
    this.params = params;
  }

  getValue(): any {
    if(this.value !== undefined) {
      this.params.value = this.value;
    }
    return this.params.value;
  }

}
