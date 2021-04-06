import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  message: string = 'A Toast Message';
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
