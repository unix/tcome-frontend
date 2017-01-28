/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ConsoleEditorComponent} from './console-editor.component';

describe('ArticleEditorComponent', () =>{
    let component: ConsoleEditorComponent;
    let fixture: ComponentFixture<ConsoleEditorComponent>;

    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations: [ConsoleEditorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() =>{
        fixture = TestBed.createComponent(ConsoleEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>{
        expect(component).toBeTruthy();
    });
});
