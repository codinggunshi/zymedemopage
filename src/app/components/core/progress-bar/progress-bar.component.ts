import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {
  @Input() type: string = "bar";
  @Input() percentage: number = 0;
  @Input() showPercentage: boolean = true;
  @Input() scale: number = 1;
  @Input() height: number;
  @Input() circleClass: string = '';
  @Input() circleStyle: any;

  @ViewChild('progressDiv') progressElementRef: ElementRef;
  @ViewChild('numberDiv') numberElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.type !== 'bar' && this.scale !== 1) {
      this.progressElementRef.nativeElement.style.transform = 'scale(' + this.scale + ')';
    }
    if(this.type === 'bar' && this.height) {
      this.progressElementRef.nativeElement.style.height = this.height + 'rem';
      this.numberElementRef.nativeElement.style.fontSize = this.height + 'rem';
    }
  }

}
