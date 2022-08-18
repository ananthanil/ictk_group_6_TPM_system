import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceExpenseViewComponent } from './finance-expense-view.component';

describe('FinanceExpenseViewComponent', () => {
  let component: FinanceExpenseViewComponent;
  let fixture: ComponentFixture<FinanceExpenseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceExpenseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceExpenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
