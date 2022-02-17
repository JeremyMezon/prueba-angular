import { TestBed } from '@angular/core/testing';

import { PaginationCharactesService } from './pagination-charactes.service';

describe('PaginationCharactesService', () => {
  let service: PaginationCharactesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationCharactesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
