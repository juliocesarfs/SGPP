import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorsDocumentComponent } from './survivors-document.component';

describe('SurvivorsDocumentComponent', () => {
  let component: SurvivorsDocumentComponent;
  let fixture: ComponentFixture<SurvivorsDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvivorsDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorsDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
