import { TestReviewComponent } from "./test-review/test-review.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LisFunctionOneComponent } from "./lis-function-one/lis-function-one.component";
import { LisFunctionTwoComponent } from "./lis-function-two/lis-function-two.component";
import { LisFunctionOneSubOneComponent } from "./lis-function-one/lis-function-one-sub-one/lis-function-one-sub-one.component";
import { LisFunctionOneSubTwoComponent } from "./lis-function-one/lis-function-one-sub-two/lis-function-one-sub-two.component";
import { ProductHomeComponent } from '../lis/product-home/product-home.component';
import { TableDemoComponent } from "./table-demo/table-demo.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import * as _ROUTES from "./lis.routes";

const routes: Routes = [];

const lisRoutes: Routes = [
  { path: "tabledemo", component: TableDemoComponent },
  {
    path: "",
    component: LisFunctionOneComponent,
    children: [
      // { path: "", component: LisFunctionOneSubOneComponent },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductHomeComponent},
      //{ path: _ROUTES.DASHBOARD.url, component: DashboardComponent },
      { path: _ROUTES.RESULT_REVIEW.url, component: TestReviewComponent }
    ]
  },
  { path: "func2", component: LisFunctionTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(lisRoutes)],
  exports: [RouterModule],
  providers: []
})
export class LisRoutingModule {}
