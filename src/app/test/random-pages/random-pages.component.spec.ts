import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPagesComponent } from './random-pages.component';

describe('RandomPagesComponent', () => {
  let component: RandomPagesComponent;
  let fixture: ComponentFixture<RandomPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
