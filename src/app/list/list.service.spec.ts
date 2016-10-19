/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {listService} from './list.service';

describe('Service: listService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [listService]
        });
    });

    it('should ...', inject([listService], (service: listService) => {
        expect(service).toBeTruthy();
    }));
});
