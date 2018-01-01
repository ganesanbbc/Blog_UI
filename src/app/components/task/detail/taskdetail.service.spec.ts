import { TestBed, inject } from '@angular/core/testing';

import { TaskdetailService } from './taskdetail.service';

describe('TaskdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskdetailService]
    });
  });

  it('should be created', inject([TaskdetailService], (service: TaskdetailService) => {
    expect(service).toBeTruthy();
  }));
});
