/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PercentPillComponent } from './percent-pill.component';

describe('PercentPillComponent', () => {
  let component: PercentPillComponent;
  let fixture: ComponentFixture<PercentPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
