import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-rotatable',
  templateUrl: './card-rotatable.component.html',
  styleUrls: ['./card-rotatable.component.scss']
})
export class CardRotatableComponent implements OnInit {
  @Input() styleCard: any;
  @Input() styleCardClass: string;
  @Input() styleFront: any;
  @Input() styleFrontClass: string;
  @Input() styleBack: any;
  @Input() styleBackClass: string;

  constructor() { }

  ngOnInit() {
  }

}
