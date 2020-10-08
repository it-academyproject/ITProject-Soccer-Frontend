import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleManagerViewComponent } from './single-manager-view.component';

describe('SingleManagerViewComponent', () => {
  let component: SingleManagerViewComponent;
  let fixture: ComponentFixture<SingleManagerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleManagerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
