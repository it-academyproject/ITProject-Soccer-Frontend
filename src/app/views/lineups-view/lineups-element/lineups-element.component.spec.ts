import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineupsElementComponent } from './lineups-element.component';

describe('LineupsElementComponent', () => {
  let component: LineupsElementComponent;
  let fixture: ComponentFixture<LineupsElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineupsElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineupsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
