import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private themeWrapper = document.querySelector('body');
  //systemState: Observable<SystemState>;
  title = "app";
  constructor() {
    //this.systemState = store.select("systemState");
    
      this.themeWrapper.style.setProperty('--color-primary', '#5186C5');
      this.themeWrapper.style.setProperty('--color-primary-rgb', '81, 134, 197');
      this.themeWrapper.style.setProperty('--color-primary-dark', '#025BC5');
      this.themeWrapper.style.setProperty('--color-primary-dark-rgb', '2, 91, 197');
      this.themeWrapper.style.setProperty('--color-primary-dark-2', '#001C74');
      this.themeWrapper.style.setProperty('--color-primary-dark-2-rgb', '0, 28, 116');
      this.themeWrapper.style.setProperty('--color-light-gray-1', '#D1E6FF');
  }


}
