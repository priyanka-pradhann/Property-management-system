import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalBaazarComponent } from './metal-baazar.component';

describe('MetalBaazarComponent', () => {
  let component: MetalBaazarComponent;
  let fixture: ComponentFixture<MetalBaazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalBaazarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetalBaazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
