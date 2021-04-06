import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  @Input() items: any[];
  @Input() selectedItem: string;

  @Input() user = {name: 'Soyna Sun', description: 'Soyna Sun\'s Dispensary'}

  constructor() { }

  ngOnInit() {
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
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
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
  }

}
