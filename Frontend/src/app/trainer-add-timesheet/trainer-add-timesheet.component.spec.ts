import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAddTimesheetComponent } from './trainer-add-timesheet.component';

describe('TrainerAddTimesheetComponent', () => {
  let component: TrainerAddTimesheetComponent;
  let fixture: ComponentFixture<TrainerAddTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerAddTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerAddTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
