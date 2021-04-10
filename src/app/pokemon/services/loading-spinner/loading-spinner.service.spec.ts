import { TestBed } from '@angular/core/testing';

import { LoadingSpinnerService } from './loading-spinner.service';

describe('LoadingSpinnerService', () => {
  let service: LoadingSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show spinner', () => {
    service.showSpinner();
    service.isLoading$.subscribe(value => {
      expect(value).toBe(true);
    });
  });

  it('should hide spinner', () => {
    service.hideSpinner();
    service.isLoading$.subscribe(value => {
      expect(value).toBe(false);
    });
  });
});
