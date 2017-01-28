/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsoleReplyService } from './console-reply.service';

describe('ConsoleReplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleReplyService]
    });
  });

  it('should ...', inject([ConsoleReplyService], (service: ConsoleReplyService) => {
    expect(service).toBeTruthy();
  }));
});
