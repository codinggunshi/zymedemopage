import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: any[];
  @Input() maxHeight: number = 20;
  @Input() dropdownClass: string;
  @Input() dropdownStyle: any;
  @Input() showCheckbox = false;
  @Input() hasHeader = false;
  @Input() title: string = '';

  @Output() listItemSelected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onItemClick(event, item) {
    this.listItemSelected.emit(item.label)
  }

}
