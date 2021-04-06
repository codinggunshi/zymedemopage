import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-notfound404",
  templateUrl: "./notfound404.component.html",
  styleUrls: ["./notfound404.component.scss"]
})
export class Notfound404Component {
  constructor(private location: Location) { }

  ngAfterViewInit() { }

  backward() {
    this.location.back();
  }
}
