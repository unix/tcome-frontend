/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ArticleListService} from './article-list.service';

describe('Service: articleListService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArticleListService]
        });
    });

    it('should ...', inject([ArticleListService], (service: ArticleListService) => {
        expect(service).toBeTruthy();
    }));
});
