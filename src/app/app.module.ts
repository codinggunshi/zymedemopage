/**
 * MODULES
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment"; // Angular CLI environemnt
import { HomeModule } from '../app/_home/home.module';
/**
 * COMPONENTS
 */
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
//import { FullScreenLoaderComponent } from "./components/loading/fullscreen-loader.component";

import { Notfound404Component } from "./components/core/notfound404/notfound404.component";
import { InputBoxCustomizedComponent } from './components/core/input-box-customized/input-box-customized.component';

@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
    InputBoxCustomizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
