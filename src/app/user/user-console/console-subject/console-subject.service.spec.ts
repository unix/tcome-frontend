/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ConsoleSubjectService} from './console-subject.service';

describe('ArticleCardService', () =>{
    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers: [ConsoleSubjectService]
        });
    });

    it('should ...', inject([ConsoleSubjectService], (service: ConsoleSubjectService) =>{
        expect(service).toBeTruthy();
    }));
});
