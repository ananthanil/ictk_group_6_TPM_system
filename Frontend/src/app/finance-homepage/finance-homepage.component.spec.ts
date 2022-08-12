import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceHomepageComponent } from './finance-homepage.component';

describe('FinanceHomepageComponent', () => {
  let component: FinanceHomepageComponent;
  let fixture: ComponentFixture<FinanceHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
