import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCreatorViewComponent } from './match-creator-view.component';

describe('MatchCreatorViewComponent', () => {
  let component: MatchCreatorViewComponent;
  let fixture: ComponentFixture<MatchCreatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCreatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
