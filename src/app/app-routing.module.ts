import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { AuthGuard } from "./_services/auth-guard.service";
import { Notfound404Component } from "./components/core/notfound404/notfound404.component";

import { HomeComponent } from '../app/_home/home.component';
import { DashboardComponent } from '../app/lis/dashboard/dashboard.component';
import { ProductHomeComponent } from '../app/lis/product-home/product-home.component';
import { LisFunctionOneComponent } from '../app/lis/lis-function-one/lis-function-one.component';
import { LabSummaryComponent } from "./lis/lab-summary/lab-summary.component";
import { AppDashboardComponent } from './lis/app-dashboard/app-dashboard.component';
import { CheckoutComponent } from './lis/checkout/checkout.component';
import { ProtocolComponent } from './lis/protocol/protocol.component';
import { NewProtocolComponent } from './lis/new-protocol/new-protocol.component';
import { DispensarySettingComponent } from './lis/dispensary-setting/dispensary-setting.component';

const appRoutes: Routes = [
  {
    //path: "",
    //loadChildren: "./external-web/external-web.module#ExternalWebModule"
    
    path: "",
    component: HomeComponent
  }, //lazy loading
  {
    path: "user",
    component: LisFunctionOneComponent,
    children: [
      { path: "", component: DashboardComponent },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductHomeComponent},
      { path: 'lab', component: LabSummaryComponent},
      { path: 'app', component: AppDashboardComponent},
      { path: 'client/checkout', component: CheckoutComponent},
      { path: 'protocol', component: ProtocolComponent},
      { path: 'new-protocol', component: NewProtocolComponent},
      { path: 'setting', component: DispensarySettingComponent}
    ]
  },
  {
    path: "lis",
    loadChildren: "./lis/lis.module#LisModule",
    canActivate: [AuthGuard]
  },
  {
    path: "billing",
    loadChildren: "./billing/billing.module#BillingModule",
    canActivate: [AuthGuard]
  },
  { path: "**", component: Notfound404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) //allow router preloading lazy-loadable modules in the background while the user is interacting with the application.
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
