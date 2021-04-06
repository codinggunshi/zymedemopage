import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card-hoverable',
  templateUrl: './card-hoverable.component.html',
  styleUrls: ['./card-hoverable.component.scss']
})
export class CardHoverableComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imgUrl: string;
  @Input() cardStyle: any;
  @Input() cardClass: string;
  @Input() imgStyle: any;
  @Input() imgClass: string;

  constructor() { }

  ngOnInit() {   
  }
}
