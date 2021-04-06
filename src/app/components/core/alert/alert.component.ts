import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: string = 'info';
  @Input() text: string = 'This is an alert message.';
  @Input() isClosable: boolean = true;

  cssClass: string = 'info-msg';
  cssIcon: string = 'icon ion-md-information-circle';
  isClosed: boolean = false;
  showAlert: boolean = true;

  constructor() { }

  ngOnInit() {
    if(this.type === "success") {
      this.cssClass = "success-msg";
      this.cssIcon = "icon ion-md-checkmark-circle";
    } else if(this.type === "warn") {
      this.cssClass = "warning-msg";
      this.cssIcon = "icon ion-md-warning";
    } else if(this.type === "error") {
      this.cssClass = "error-msg";
      this.cssIcon = "icon ion-md-close-circle";
    }
  }

  close() {
    this.isClosed = true;
    setTimeout(() => { // use ArrowFunction ()=> to preserve "this" context within setTimeout
      this.showAlert = false;
    }, 600);
  }

}
