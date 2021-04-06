import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-round',
  templateUrl: './button-round.component.html',
  styleUrls: ['./button-round.component.scss']
})
export class ButtonRoundComponent implements OnInit {
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
