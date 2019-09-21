import { TestBed } from '@angular/core/testing';

import { NgxSelectFlagsService } from './ngx-select-flags.service';

describe('NgxSelectFlagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSelectFlagsService = TestBed.get(NgxSelectFlagsService);
    expect(service).toBeTruthy();
  });
});
