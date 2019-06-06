import { TestBed } from '@angular/core/testing';

import { TimeslotBackendService } from './timeslot-backend.service';

describe('TimeslotBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeslotBackendService = TestBed.get(TimeslotBackendService);
    expect(service).toBeTruthy();
  });
});
