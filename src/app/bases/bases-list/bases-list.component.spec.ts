import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesListComponent } from './bases-list.component';

describe('BasesListComponent', () => {
  let component: BasesListComponent;
  let fixture: ComponentFixture<BasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
