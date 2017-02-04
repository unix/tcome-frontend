/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecommendService } from './recommend.service';

describe('RecommendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendService]
    });
  });

  it('should ...', inject([RecommendService], (service: RecommendService) => {
    expect(service).toBeTruthy();
  }));
});
