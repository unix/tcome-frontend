/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ArticleDetailService} from './article-detail.service';

describe('Service: Detail', () =>{
    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers: [ArticleDetailService]
        });
    });

    it('should ...', inject([ArticleDetailService], (service: ArticleDetailService) =>{
        expect(service).toBeTruthy();
    }));
});
