import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingInfoComponent } from './landing-info.component';

describe('LandingInfoComponent', () => {
  let component: LandingInfoComponent;
  let fixture: ComponentFixture<LandingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
