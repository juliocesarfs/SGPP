import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorsListComponent } from './survivors-list.component';

describe('SurvivorsListComponent', () => {
  let component: SurvivorsListComponent;
  let fixture: ComponentFixture<SurvivorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvivorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
