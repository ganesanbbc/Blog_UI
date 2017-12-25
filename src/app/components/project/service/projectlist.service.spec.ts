import { TestBed, inject } from '@angular/core/testing';

import { ProjectlistService } from './projectlist.service';

describe('ProjectlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectlistService]
    });
  });

  it('should be created', inject([ProjectlistService], (service: ProjectlistService) => {
    expect(service).toBeTruthy();
  }));
});
