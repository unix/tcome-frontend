/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ConsoleWriteService} from './console-write.service';

describe('ArticleWriteService', () =>{
    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers: [ConsoleWriteService]
        });
    });

    it('should ...', inject([ConsoleWriteService], (service: ConsoleWriteService) =>{
        expect(service).toBeTruthy();
    }));
});
