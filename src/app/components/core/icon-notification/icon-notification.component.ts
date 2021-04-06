import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-notification',
  templateUrl: './icon-notification.component.html',
  styleUrls: ['./icon-notification.component.scss']
})
export class IconNotificationComponent implements OnInit {
  @Input() iconClass: string = '';
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
