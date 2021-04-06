import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss']
})
export class StepBarComponent implements OnInit {
  @ViewChildren('step') steps: QueryList<any>;

  constructor() { }

  ngOnInit() {
  }

  forward() {
    let stepArr = this.steps.toArray();
    for(let i=0; i<stepArr.length; i++) {
      if(stepArr[i].nativeElement.classList.contains('step-bar__current')) {
        stepArr[i].nativeElement.classList.remove('step-bar__current');
        stepArr[i].nativeElement.classList.add('step-bar__done');
        if(i < stepArr.length - 1) {
          stepArr[i+1].nativeElement.classList.add('step-bar__current');
        }
        break;
      }
    }
  }

  backward() {
    let stepArr = this.steps.toArray();
    if(stepArr[0].nativeElement.classList.contains('step-bar__current')) {
      return;
    }
    for(let i=stepArr.length - 1; i>=0; i--) {
      if(stepArr[stepArr.length-1].nativeElement.classList.contains('step-bar__done')) {
        stepArr[stepArr.length-1].nativeElement.classList.remove('step-bar__done');
        stepArr[stepArr.length-1].nativeElement.classList.add('step-bar__current');
        break;
      }
      if(stepArr[i].nativeElement.classList.contains('step-bar__current')) {
        stepArr[i].nativeElement.classList.remove('step-bar__current');
        if(i - 1 >= 0) {
          stepArr[i-1].nativeElement.classList.remove('step-bar__done');
          stepArr[i-1].nativeElement.classList.add('step-bar__current');
        }
        break;
      }
    }
  }

}
