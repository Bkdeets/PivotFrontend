import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyActiveCardComponent } from './strategy-active-card.component';

describe('StrategyActiveCardComponent', () => {
  let component: StrategyActiveCardComponent;
  let fixture: ComponentFixture<ActiveStrategyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyActiveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyActiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
