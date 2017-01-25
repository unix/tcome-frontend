/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MissionService } from './mission.service';

describe('MissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionService]
    });
  });

  it('should ...', inject([MissionService], (service: MissionService) => {
    expect(service).toBeTruthy();
  }));
});
