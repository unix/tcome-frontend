/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ConsoleWriteComponent} from './console-write.component';

describe('ArticleWriteComponent', () =>{
    let component: ConsoleWriteComponent;
    let fixture: ComponentFixture<ConsoleWriteComponent>;

    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations: [ConsoleWriteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() =>{
        fixture = TestBed.createComponent(ConsoleWriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>{
        expect(component).toBeTruthy();
    });
});
