import { TestBed, inject } from '@angular/core/testing';

import { ProjectdeleteService } from './projectdelete.service';

describe('ProjectdeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectdeleteService]
    });
  });

  it('should be created', inject([ProjectdeleteService], (service: ProjectdeleteService) => {
    expect(service).toBeTruthy();
  }));
});
