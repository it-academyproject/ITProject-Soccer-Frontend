import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersViewComponent } from './players-view.component';

describe('PlayersViewComponent', () => {
  let component: PlayersViewComponent;
  let fixture: ComponentFixture<PlayersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
