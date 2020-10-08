import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBarComponent } from './skills-bar.component';

describe('SkillsBarComponent', () => {
  let component: SkillsBarComponent;
  let fixture: ComponentFixture<SkillsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
