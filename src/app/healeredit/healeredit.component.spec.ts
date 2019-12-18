/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealereditComponent } from './healeredit.component';

describe('HealereditComponent', () => {
  let component: HealereditComponent;
  let fixture: ComponentFixture<HealereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
