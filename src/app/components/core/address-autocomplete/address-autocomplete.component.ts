import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.scss']
})
export class AddressAutocompleteComponent implements OnInit {
  params: any;
  address: string;
  @ViewChild('input') inputElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.params = params;
  }

  afterGuiAttached() {
    this.inputElementRef.nativeElement.focus();
  }

  getValue(): any {
    if(this.address !== undefined) {
      this.params.value = this.address;
    }
    return this.params.value;
  }

  handleAddressChange(address) {
    this.address = address['formatted_address'];
  }
}
