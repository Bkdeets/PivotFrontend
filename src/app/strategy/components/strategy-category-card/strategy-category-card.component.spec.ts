import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCategoryCardComponent } from './strategy-category-card.component';

describe('StrategyCategoryCardComponent', () => {
  let component: StrategyCategoryCardComponent;
  let fixture: ComponentFixture<StrategyCategoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
