import { TestBed, inject } from '@angular/core/testing';

import { ParenttaskentryService } from './parenttaskentry.service';

describe('ParenttaskentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParenttaskentryService]
    });
  });

  it('should be created', inject([ParenttaskentryService], (service: ParenttaskentryService) => {
    expect(service).toBeTruthy();
  }));
});
