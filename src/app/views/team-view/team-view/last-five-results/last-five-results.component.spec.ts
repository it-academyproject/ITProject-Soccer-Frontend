import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFiveResultsComponent } from './last-five-results.component';

describe('LastFiveResultsComponent', () => {
  let component: LastFiveResultsComponent;
  let fixture: ComponentFixture<LastFiveResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFiveResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFiveResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
