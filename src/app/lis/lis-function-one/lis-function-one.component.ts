import { Component, OnInit, ViewChild } from "@angular/core";
import { SidenavComponent } from '../../components/core/sidenav/sidenav.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ProductHomeComponent } from '../product-home/product-home.component';

@Component({
  selector: "app-lis-function-one",
  templateUrl: "./lis-function-one.component.html",
  styleUrls: ["./lis-function-one.component.scss"]
})
export class LisFunctionOneComponent implements OnInit {

  @ViewChild(SidenavComponent) sidenav: SidenavComponent;

  headerItems: any[];
  items: any[];
  floatNavItems: any[];

  layoutLoaded = false;
  
  constructor() { }

  ngOnInit() {

    this.headerItems = [
      {
        label: "Logout",
        icon: "icon ion-md-log-out"
      },
      {
        label: "Home",
        icon: "icon ion-md-home"
      },
      {
        label: "Settings",
        icon: "icon ion-md-settings"
      }
    ];

    this.items = [
      {
        label: "Dashboard",
        icon: "icon ion-md-home",
        url: '/user'
      },
      {
        label: "Clients",
        icon: "icon ion-md-menu",
        url: 'client/checkout'
      },
      {
        label: "Products",
        icon: "icon ion-md-bookmark",
        url: 'product'
      },
      {
        label: "Protocols",
        icon: "icon ion-md-call",
        url: './protocol'
      },
      {
        label: "Lab Analytics",
        icon: "icon ion-md-settings",
        url: 'lab'
      },
      {
        label: "Nutrition Analytics",
        icon: "icon ion-md-menu",
        url: 'app'
      },
      {
        label: "Settings",
        icon: "icon ion-md-images",
        url: 'setting'
      }
    ];

    this.floatNavItems = [
      {
        label: 'About This App',
        url: ''
      },
      {
        label: 'Documentation',
        url: ''
      },
      {
        label: 'FAQ',
        url: ''
      },
      {
        label: 'Dashboard',
        url: ''
      },
      {
        label: 'To Billing',
        url: ''
      }
    ];
  }

  componentAdded(comp) {
    if(comp instanceof DashboardComponent) {
      setTimeout(() => {
        this.layoutLoaded = true;
        this.sidenav.setActive('Dashboard');
      }, 0);
    } else if(comp instanceof ProductHomeComponent) {
      setTimeout(() => {
        this.layoutLoaded = true;
        this.sidenav.setActive('Products');
      }, 0);
    }
  }
}
