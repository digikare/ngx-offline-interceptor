import { TestBed } from '@angular/core/testing';

import { NgxOfflineInterceptorService } from './ngx-offline-interceptor.service';

describe('NgxOfflineInterceptorService', () => {
  let service: NgxOfflineInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOfflineInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
