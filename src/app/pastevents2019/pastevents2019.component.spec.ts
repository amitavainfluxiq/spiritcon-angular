import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEvents2019Component } from './pastevents2019.component';

describe('PastEvents2019Component', () => {
  let component: PastEvents2019Component;
  let fixture: ComponentFixture<PastEvents2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastEvents2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEvents2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
