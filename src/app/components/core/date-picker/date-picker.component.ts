import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  params: any;
  selectedDate: any;
  @ViewChild('input') inputElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.params = params;
  }

  dateSelected() {
    this.params.stopEditing();
  }

  getValue(): any {
    if(this.selectedDate !== undefined) {
      this.params.value = this.selectedDate;
    }
    return this.params.value;
  }

  isPopup(): boolean {
    return true;
  }

}
