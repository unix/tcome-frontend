/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LockerService } from './locker.service';

describe('LockerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockerService]
    });
  });

  it('should ...', inject([LockerService], (service: LockerService) => {
    expect(service).toBeTruthy();
  }));
});
