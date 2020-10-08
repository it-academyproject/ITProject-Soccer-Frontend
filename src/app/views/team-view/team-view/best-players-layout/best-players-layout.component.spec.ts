import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlayersLayoutComponent } from './best-players-layout.component';

describe('BestPlayersLayoutComponent', () => {
  let component: BestPlayersLayoutComponent;
  let fixture: ComponentFixture<BestPlayersLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPlayersLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPlayersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
