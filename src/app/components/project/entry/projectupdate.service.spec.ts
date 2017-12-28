import { TestBed, inject } from '@angular/core/testing';

import { ProjectupdateService } from './projectupdate.service';

describe('ProjectupdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectupdateService]
    });
  });

  it('should be created', inject([ProjectupdateService], (service: ProjectupdateService) => {
    expect(service).toBeTruthy();
  }));
});
