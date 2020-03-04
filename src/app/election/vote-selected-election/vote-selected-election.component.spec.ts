import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSelectedElectionComponent } from './vote-selected-election.component';

describe('VoteSelectedElectionComponent', () => {
  let component: VoteSelectedElectionComponent;
  let fixture: ComponentFixture<VoteSelectedElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSelectedElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSelectedElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
