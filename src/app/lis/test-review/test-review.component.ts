import { Component, OnInit } from "@angular/core";

import {GridOptions} from 'ag-grid-community';

@Component({
  selector: "app-test-review",
  templateUrl: "./test-review.component.html",
  styleUrls: ["./test-review.component.scss"]
})
export class TestReviewComponent implements OnInit {
  dropdownListSingle: any[];
  selectedItemsSingle: any[];
  dropdownSettingsSingle: any;
  items: any[];
  treeItems: any[];
  columnDefs: any;
  rowData: any[];
  public gridOptions: GridOptions;

  slideLeft: boolean = false;

  constructor() {
    this.gridOptions = <GridOptions>{};
  }

  ngOnInit() {
    this.dropdownListSingle = [
      { item_id: 1, item_text: 'Denver' },
      { item_id: 2, item_text: 'San Jose' },
      { item_id: 3, item_text: 'Rome' },
      { item_id: 4, item_text: 'Boston' },
      { item_id: 5, item_text: 'New York' }
    ];

    this.selectedItemsSingle = [
      { item_id: 3, item_text: 'Rome' }
    ];

    this.dropdownSettingsSingle = {
      singleSelection: true,
      closeDropDownOnSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.items = [
      {
        label: "Home",
        icon: "icon ion-md-home"
      },
      {
        label: "Products",
        icon: "icon ion-md-menu",
        items: [
          {
            label: "Product 1"
          },
          {
            label: "Product 2",
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
          }
        ]
      },
      {
        label: "About",
        icon: "icon ion-md-bookmark"
      },
      {
        label: "Contact",
        icon: "icon ion-md-call"
      },
      {
        label: "Setting",
        icon: "icon ion-md-settings"
      },
      {
        label: "Goods",
        icon: "icon ion-md-menu",
        items: [
          {
            label: "Meat",
            items: [{ label: "Meat 1" }, { label: "Meat 2" }]
          },
          {
            label: "Snack",
            items: [
              { label: "Snack 1" },
              { label: "Snack 2" },
              { label: "Snack 3" }
            ]
          },
          {
            label: "Vegetable",
            items: [{ label: "Sub Product 3" }, { label: "Sub Product 4" }]
          }
        ]
      },
      {
        label: "Gallery",
        icon: "icon ion-md-images"
      },
      {
        label: "Panel",
        icon: "icon ion-md-apps"
      }
    ];

    this.treeItems = [
      {
        label: "Home"
      },
      {
        label: "Products",
        items: [
          {
            label: "Product 1"
          },
          {
            label: "Product 2",
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
          }
        ]
      },
      {
        label: "About",
      },
      {
        label: "Contact",
      },
      {
        label: "Setting",
      },
      {
        label: "Goods",
        items: [
          {
            label: "Meat",
            items: [{ label: "Meat 1" }, { label: "Meat 2" }]
          },
          {
            label: "Snack",
            items: [
              { label: "Snack 1" },
              { label: "Snack 2" },
              { label: "Snack 3" }
            ]
          },
          {
            label: "Vegetable",
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
          }
        ]
      },
      {
        label: "Gallery",
      },
      {
        label: "Panel",
      }
    ];

    this.columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }

  public onQuickFilterChanged($event) {
    this.gridOptions.api.setQuickFilter($event.target.value);
  }

  toggleTransform() {
    this.slideLeft = !this.slideLeft;
  }
}
