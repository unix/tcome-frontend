/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserMainComponent } from './user-main.component';

describe('UserMainComponent', () => {
  let component: UserMainComponent;
  let fixture: ComponentFixture<UserMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
