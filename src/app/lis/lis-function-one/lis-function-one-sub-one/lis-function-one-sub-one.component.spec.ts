import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisFunctionOneSubOneComponent } from './lis-function-one-sub-one.component';

describe('LisFunctionOneSubOneComponent', () => {
  let component: LisFunctionOneSubOneComponent;
  let fixture: ComponentFixture<LisFunctionOneSubOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisFunctionOneSubOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisFunctionOneSubOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
