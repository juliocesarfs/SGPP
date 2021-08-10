import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesFormComponent } from './bases-form.component';

describe('BasesFormComponent', () => {
  let component: BasesFormComponent;
  let fixture: ComponentFixture<BasesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
