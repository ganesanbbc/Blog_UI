import { TestBed, inject } from '@angular/core/testing';

import { TaskentryService } from './taskentry.service';

describe('TaskentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskentryService]
    });
  });

  it('should be created', inject([TaskentryService], (service: TaskentryService) => {
    expect(service).toBeTruthy();
  }));
});
