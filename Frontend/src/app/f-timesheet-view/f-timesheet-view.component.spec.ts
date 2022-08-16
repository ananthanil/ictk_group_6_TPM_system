import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTimesheetViewComponent } from './f-timesheet-view.component';

describe('FTimesheetViewComponent', () => {
  let component: FTimesheetViewComponent;
  let fixture: ComponentFixture<FTimesheetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTimesheetViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FTimesheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
