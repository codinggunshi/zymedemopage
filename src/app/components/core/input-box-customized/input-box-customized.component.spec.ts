import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxCustomizedComponent } from './input-box-customized.component';

describe('InputBoxCustomizedComponent', () => {
  let component: InputBoxCustomizedComponent;
  let fixture: ComponentFixture<InputBoxCustomizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBoxCustomizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
