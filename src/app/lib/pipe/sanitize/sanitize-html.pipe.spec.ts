/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {SanitizeHtmlPipe} from './sanitize-html.pipe';

describe('SanitizeHtmlPipe', () =>{
    it('create an instance', () =>{
        let pipe = new SanitizeHtmlPipe();
        expect(pipe).toBeTruthy();
    });
});
