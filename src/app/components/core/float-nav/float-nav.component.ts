import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-float-nav',
  templateUrl: './float-nav.component.html',
  styleUrls: ['./float-nav.component.scss']
})
export class FloatNavComponent implements OnInit {
  @Input() items: any[];

  constructor() { }

  ngOnInit() {
  }

}
