import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStrategyCardComponent } from './active-strategy-card.component';

describe('ActiveStrategyCardComponent', () => {
  let component: ActiveStrategyCardComponent;
  let fixture: ComponentFixture<ActiveStrategyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveStrategyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveStrategyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
