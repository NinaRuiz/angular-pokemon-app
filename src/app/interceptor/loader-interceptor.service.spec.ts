import { TestBed } from '@angular/core/testing';
import { LoadingSpinnerService } from '../pokemon/services/loading-spinner/loading-spinner.service';

import { LoaderInterceptorService } from './loader-interceptor.service';

describe('LoaderInterceptorService', () => {
  let service: LoaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingSpinnerService,
        LoaderInterceptorService
      ]
    });
    service = TestBed.inject(LoaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
