import { TestBed } from '@angular/core/testing';

import { CalendarResolverService } from './calendar-resolver.service';

describe('CalendarResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarResolverService = TestBed.get(CalendarResolverService);
    expect(service).toBeTruthy();
  });
});
