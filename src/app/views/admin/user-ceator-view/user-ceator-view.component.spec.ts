import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCeatorViewComponent } from './user-ceator-view.component';

describe('UserCeatorViewComponent', () => {
  let component: UserCeatorViewComponent;
  let fixture: ComponentFixture<UserCeatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCeatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCeatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
