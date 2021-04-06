import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-step-bar-circle',
  templateUrl: './step-bar-circle.component.html',
  styleUrls: ['./step-bar-circle.component.scss']
})
export class StepBarCircleComponent implements OnInit, AfterViewInit {
  @Input() horizontal: boolean = false;
  @ViewChild('stepbar') bar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.horizontal) {
      this.bar.nativeElement.classList.add('horizontal');
    }
  }

}
