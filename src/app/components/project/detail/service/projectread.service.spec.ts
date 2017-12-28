import { TestBed, inject } from '@angular/core/testing';

import { ProjectreadService } from './projectread.service';

describe('ProjectreadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectreadService]
    });
  });

  it('should be created', inject([ProjectreadService], (service: ProjectreadService) => {
    expect(service).toBeTruthy();
  }));
});
