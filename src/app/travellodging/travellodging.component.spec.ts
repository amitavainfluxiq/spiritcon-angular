/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravellodgingComponent } from './travellodging.component';

describe('TravellodgingComponent', () => {
  let component: TravellodgingComponent;
  let fixture: ComponentFixture<TravellodgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellodgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
