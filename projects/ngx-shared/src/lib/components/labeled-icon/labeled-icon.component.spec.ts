import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledIconComponent } from './labeled-icon.component';

describe('LabeledIconComponent', () => {
  let component: LabeledIconComponent;
  let fixture: ComponentFixture<LabeledIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
