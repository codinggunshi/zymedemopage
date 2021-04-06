import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-date-filter',
  templateUrl: './ag-grid-date-filter.component.html',
  styleUrls: ['./ag-grid-date-filter.component.scss']
})
export class AgGridDateFilterComponent implements OnInit {
  params: any;
  selectedDate: any;

  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.params = params;
  }

  dateSelected() {
    this.params.onDateChanged();
  }

  getDate(): Date {
    return this.selectedDate;
  }

  clearDate() {
    this.selectedDate = undefined;
    this.params.onDateChanged();
  }
}
