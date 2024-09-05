import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimeslotComponent } from './addtimeslot.component';

describe('AddtimeslotComponent', () => {
  let component: AddtimeslotComponent;
  let fixture: ComponentFixture<AddtimeslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtimeslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
