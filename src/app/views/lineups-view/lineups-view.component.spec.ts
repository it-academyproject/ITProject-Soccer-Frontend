import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineupsViewComponent } from './lineups-view.component';

describe('LineupsViewComponent', () => {
  let component: LineupsViewComponent;
  let fixture: ComponentFixture<LineupsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineupsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineupsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
