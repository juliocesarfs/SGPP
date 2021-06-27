import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorsFormComponent } from './survivors-form.component';

describe('SurvivorsFormComponent', () => {
  let component: SurvivorsFormComponent;
  let fixture: ComponentFixture<SurvivorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvivorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
