import { TestBed, inject } from '@angular/core/testing';

import { UserentryService } from './userentry.service';

describe('UserentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserentryService]
    });
  });

  it('should be created', inject([UserentryService], (service: UserentryService) => {
    expect(service).toBeTruthy();
  }));
});
