import { TestBed } from '@angular/core/testing';

import { SquirrelDataService } from './squirrel-data.service';

describe('SquirrelDataService', () => {
  let service: SquirrelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquirrelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
