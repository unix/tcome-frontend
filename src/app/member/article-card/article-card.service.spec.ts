/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticleCardService } from './article-card.service';

describe('ArticleCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleCardService]
    });
  });

  it('should ...', inject([ArticleCardService], (service: ArticleCardService) => {
    expect(service).toBeTruthy();
  }));
});
