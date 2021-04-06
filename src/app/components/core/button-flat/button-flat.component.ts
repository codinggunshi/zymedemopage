import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-flat',
  templateUrl: './button-flat.component.html',
  styleUrls: ['./button-flat.component.scss']
})
export class ButtonFlatComponent implements OnInit {
  @Input() label: string = "click me";
  @Input() buttonClass: string = '';
  @Input() buttonStyle: any;

  constructor() { }

  ngOnInit() {
  }

}
