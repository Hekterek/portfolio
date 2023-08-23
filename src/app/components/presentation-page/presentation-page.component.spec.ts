import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPageComponent } from './presentation-page.component';

describe('PresentationPageComponent', () => {
  let component: PresentationPageComponent;
  let fixture: ComponentFixture<PresentationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationPageComponent]
    });
    fixture = TestBed.createComponent(PresentationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
