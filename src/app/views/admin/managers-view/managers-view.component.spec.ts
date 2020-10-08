import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersViewComponent } from './managers-view.component';

describe('ManagersViewComponent', () => {
  let component: ManagersViewComponent;
  let fixture: ComponentFixture<ManagersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
