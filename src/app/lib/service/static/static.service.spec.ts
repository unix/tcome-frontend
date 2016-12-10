/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaticService } from './static.service';

describe('Service: Static', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticService]
    });
  });

  it('should ...', inject([StaticService], (service: StaticService) => {
    expect(service).toBeTruthy();
  }));
});
