import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMetalDetailsComponent } from './view-metal-details.component';

describe('ViewMetalDetailsComponent', () => {
  let component: ViewMetalDetailsComponent;
  let fixture: ComponentFixture<ViewMetalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMetalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMetalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
