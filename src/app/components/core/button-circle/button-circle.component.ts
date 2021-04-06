import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.scss']
})
export class ButtonCircleComponent implements OnInit, AfterViewInit {
  @Input() iconClass: string;
  @Input() scale: number = 1;
  @Input() buttonClass: string = '';
  @Input() disabled: boolean = false;

  @ViewChild('buttonElement') buttonElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
    if(this.disabled) {
      this.buttonClass = 'btn-disable';
    }
  }

  ngAfterViewInit() {
    if(this.scale !== 1) {
      this.buttonElementRef.nativeElement.style.transform = 'scale(' + this.scale + ')';
    }
  }

}
