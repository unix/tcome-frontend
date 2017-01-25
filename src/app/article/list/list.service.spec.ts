/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ListService} from './list.service';

describe('Service: listService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ListService]
        });
    });

    it('should ...', inject([ListService], (service: ListService) => {
        expect(service).toBeTruthy();
    }));
});
