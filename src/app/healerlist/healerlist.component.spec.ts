/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealerlistComponent } from './healerlist.component';

describe('HealerlistComponent', () => {
  let component: HealerlistComponent;
  let fixture: ComponentFixture<HealerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
