import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-button-float',
  templateUrl: './dropdown-button-float.component.html',
  styleUrls: ['./dropdown-button-float.component.scss']
})
export class DropdownButtonFloatComponent implements OnInit {
  opened: boolean = false;

  @Input() selected: string = ' ';
  @Input() items: any[];
  @Input() dropdownClass: string;

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.opened = true;
  }

  closeMenu() {
    this.opened = false;
  }

  select(selected) {
    this.selected = selected;
    this.opened = false;
    this.onSelect.emit(selected);
  }

  closeDropdown() {
    this.opened = false;
  }

}
