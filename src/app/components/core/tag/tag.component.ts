import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() bordered: boolean = false;
  @Input() label: string = "'label";

  constructor() { }

  ngOnInit() {
  }

}
