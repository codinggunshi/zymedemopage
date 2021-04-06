import { Component, OnInit } from '@angular/core';

import { Shipping } from '../../_model/shipping';
import { Payment } from '../../_model/payment';

import {
  trigger,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],

  animations: [
    trigger("enterAnimation", [
      transition(":leave", [
        style({ opacity: "1", height: "*" }),
        animate("300ms", style({ opacity: "0", height: 0 }))
      ]),
    ]),
  ]
})
export class CheckoutComponent implements OnInit {

  productQuantityList: any[] = [];
  cartItems: any[] = [];
  totalAmount: number = 0;

  shippingOptions: any[] = [];
  selectedShippingAmount: number = 0;

  checkOutProgress: number = 1;

  shippingInfo = new Shipping('', '', '', '', '', '', '', '');
  paymentInfo = new Payment('', '', '', '', '', '', '', '', '', '');

  selectedShippingOption: any;
  paymentAddrAutoFill: boolean = false;

  constructor() { }

  ngOnInit() {
    this.productQuantityList = [
      {value: '1', displayName: '1'},
      {value: '2', displayName: '2'},
      {value: '3', displayName: '3'},
      {value: '4', displayName: '4'},
      {value: '5', displayName: '5'}
    ];

    this.cartItems = [
      {price: 38.61, amount: 1},
      {price: 28.11, amount: 2},
      {price: 67.42, amount: 1},
      {price: 92.87, amount: 1}
    ];

    this.cartItems.forEach((element, index) => {
      this.totalAmount += element.price * element.amount;
    });

    this.shippingOptions = [
      {name: 'STANDARD', description: '3-7 Bussiness Days', arriveDate: 'Arrives by Feb 14', amount: 0.00, selected: true}, //interpolate the real date later
      {name: 'TWO DAY', description: '2 Bussiness Days', arriveDate: 'Arrives by Feb 10', amount: 10.00, selected: false},
      {name: 'OVERNIGHT', description: '1 Bussiness Days', arriveDate: 'Arrives by Feb 9', amount: 20.00, selected: false}
    ];

    this.selectedShippingOption = this.shippingOptions[0];
  }

  removeItemFromCart(idx) {
    this.totalAmount -= this.cartItems[idx].price * this.cartItems[idx].amount;
    this.cartItems.splice(idx, 1);
  }

  selectItemAmount(selected, idx) {
    this.totalAmount += (selected - this.cartItems[idx].amount) * this.cartItems[idx].price;
    this.cartItems[idx].amount = selected;
  }

  checkout() {
    this.checkOutProgress++;
  }

  progressNavigation(idx) {
    this.checkOutProgress = idx;
  }

  shippingOptionSelected(idx) {
    this.shippingOptions.forEach(function(element, index) {
      this[index].selected = false;
    }, this.shippingOptions);
    this.shippingOptions[idx].selected = true;
    this.selectedShippingAmount = this.shippingOptions[idx].amount;
    this.selectedShippingOption = this.shippingOptions[idx];
  }

  goForward() {
    this.checkOutProgress++;
  }

  goBack() {
    this.checkOutProgress--;
  }

  editShipping() {
    this.checkOutProgress = 2;
  }

  editPayment() {
    this.checkOutProgress = 3;
  }

  autoFillChecked() {
    this.paymentInfo.address1 = this.shippingInfo.address1;
    this.paymentInfo.address2 = this.shippingInfo.address2;
    this.paymentInfo.city = this.shippingInfo.city;
    this.paymentInfo.state = this.shippingInfo.state;
    this.paymentInfo.zip = this.shippingInfo.zip;
    this.paymentInfo.phone = this.shippingInfo.phone;
    this.paymentAddrAutoFill = true;
  }

  autoFillUnchecked() {
    this.paymentAddrAutoFill = false;
  }

}
