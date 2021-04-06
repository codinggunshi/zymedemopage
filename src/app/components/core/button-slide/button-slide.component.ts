import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-slide',
  templateUrl: './button-slide.component.html',
  styleUrls: ['./button-slide.component.scss']
})
export class ButtonSlideComponent implements OnInit {
  @Input() buttonClass: string = '';
  @Input() buttonStyle: any;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
