import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMobileComponent } from './navMobile.component';

describe('NavComponent', () => {
  let component: NavMobileComponent;
  let fixture: ComponentFixture<NavMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavMobileComponent],
    });
    fixture = TestBed.createComponent(NavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
