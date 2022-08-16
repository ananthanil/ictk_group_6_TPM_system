import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TModeComponent } from './t-mode.component';

describe('TModeComponent', () => {
  let component: TModeComponent;
  let fixture: ComponentFixture<TModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
