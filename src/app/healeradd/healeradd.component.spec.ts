/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealeraddComponent } from './healeradd.component';

describe('HealeraddComponent', () => {
  let component: HealeraddComponent;
  let fixture: ComponentFixture<HealeraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealeraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
