import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-float',
  templateUrl: './alert-float.component.html',
  styleUrls: ['./alert-float.component.scss']
})
export class AlertFloatComponent implements OnInit {
  @Input() type: string = 'success';
  @Input() msg: string = '';
  @Input() showAlert: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.showAlert = false;
  }
}
