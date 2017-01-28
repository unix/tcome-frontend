/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleDetailComponent } from './article-detail.component';

describe('ArticleDetailComponent', () => {
    let component: ArticleDetailComponent;
    let fixture: ComponentFixture<ArticleDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ArticleDetailComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

