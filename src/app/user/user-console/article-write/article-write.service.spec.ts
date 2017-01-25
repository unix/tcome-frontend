/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticleWriteService } from './article-write.service';

describe('ArticleWriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleWriteService]
    });
  });

  it('should ...', inject([ArticleWriteService], (service: ArticleWriteService) => {
    expect(service).toBeTruthy();
  }));
});
