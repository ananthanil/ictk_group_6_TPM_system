import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceExpenseComponent } from './finance-expense.component';

describe('FinanceExpenseComponent', () => {
  let component: FinanceExpenseComponent;
  let fixture: ComponentFixture<FinanceExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
