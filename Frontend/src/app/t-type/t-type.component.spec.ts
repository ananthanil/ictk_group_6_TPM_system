import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTypeComponent } from './t-type.component';

describe('TTypeComponent', () => {
  let component: TTypeComponent;
  let fixture: ComponentFixture<TTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
