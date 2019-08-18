import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCategoryDetailComponent } from './strategy-category-detail.component';

describe('StrategyCategoryDetailComponent', () => {
  let component: StrategyCategoryDetailComponent;
  let fixture: ComponentFixture<StrategyCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
