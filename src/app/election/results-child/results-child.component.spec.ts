import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsChildComponent } from './results-child.component';

describe('ResultsChildComponent', () => {
  let component: ResultsChildComponent;
  let fixture: ComponentFixture<ResultsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
