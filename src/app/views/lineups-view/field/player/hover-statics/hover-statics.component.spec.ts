import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverStaticsComponent } from './hover-statics.component';

describe('HoverStaticsComponent', () => {
  let component: HoverStaticsComponent;
  let fixture: ComponentFixture<HoverStaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverStaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
