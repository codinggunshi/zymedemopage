import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisFunctionOneSubTwoComponent } from './lis-function-one-sub-two.component';

describe('LisFunctionOneSubTwoComponent', () => {
  let component: LisFunctionOneSubTwoComponent;
  let fixture: ComponentFixture<LisFunctionOneSubTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisFunctionOneSubTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisFunctionOneSubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
