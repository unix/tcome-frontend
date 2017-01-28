/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ConsoleSubjectComponent} from './console-subject.component';

describe('ArticleCardComponent', () =>{
    let component: ConsoleSubjectComponent;
    let fixture: ComponentFixture<ConsoleSubjectComponent>;

    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations: [ConsoleSubjectComponent]
        })
            .compileComponents();
    }));

    beforeEach(() =>{
        fixture = TestBed.createComponent(ConsoleSubjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>{
        expect(component).toBeTruthy();
    });
});
