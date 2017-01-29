/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService]
    });
  });

  it('should ...', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));
});
