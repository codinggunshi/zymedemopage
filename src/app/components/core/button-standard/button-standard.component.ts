import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-standard',
  templateUrl: './button-standard.component.html',
  styleUrls: ['./button-standard.component.scss']
})
export class ButtonStandardComponent implements OnInit {
  @Input() buttonClass: string = '';
  @Input() buttonStyle: any;
  @Input() label: string;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.disabled) {
      this.buttonClass = 'btn-disable';
    }
  }

}
