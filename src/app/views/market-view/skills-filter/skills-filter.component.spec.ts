import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFilterComponent } from './skills-filter.component';

describe('SkillsFilterComponent', () => {
  let component: SkillsFilterComponent;
  let fixture: ComponentFixture<SkillsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
