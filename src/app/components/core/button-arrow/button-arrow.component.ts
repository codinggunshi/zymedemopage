import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-arrow',
  templateUrl: './button-arrow.component.html',
  styleUrls: ['./button-arrow.component.scss']
})
export class ButtonArrowComponent implements OnInit {
  @Input() buttonClass: string = '';
  @Input() buttonStyle: any;
  @Input() label: string = '';

  constructor() { }

  ngOnInit() {
  }

}
