import { TestBed, inject } from '@angular/core/testing';

import { UserdetailService } from './userdetail.service';

describe('UserdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdetailService]
    });
  });

  it('should be created', inject([UserdetailService], (service: UserdetailService) => {
    expect(service).toBeTruthy();
  }));
});
