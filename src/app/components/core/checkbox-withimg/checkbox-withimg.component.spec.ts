import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWithimgComponent } from './checkbox-withimg.component';

describe('CheckboxWithimgComponent', () => {
  let component: CheckboxWithimgComponent;
  let fixture: ComponentFixture<CheckboxWithimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxWithimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
