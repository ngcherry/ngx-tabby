import { TestBed } from '@angular/core/testing';

import { NgxTabbyService } from './ngx-tabby.service';

describe('NgxTabbyService', () => {
  let service: NgxTabbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTabbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
