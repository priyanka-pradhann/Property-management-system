import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetColourComponent } from './get-colour.component';

describe('GetColourComponent', () => {
  let component: GetColourComponent;
  let fixture: ComponentFixture<GetColourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetColourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
