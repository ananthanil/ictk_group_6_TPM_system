import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSalaryRecieptComponent } from './trainer-salary-reciept.component';

describe('TrainerSalaryRecieptComponent', () => {
  let component: TrainerSalaryRecieptComponent;
  let fixture: ComponentFixture<TrainerSalaryRecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerSalaryRecieptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerSalaryRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
