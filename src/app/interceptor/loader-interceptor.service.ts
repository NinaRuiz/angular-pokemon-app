import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingSpinnerService} from '../pokemon/services/loading-spinner/loading-spinner.service';
import {delay, finalize} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor{

  totalRequest = 0;

  constructor(
    private loadingSpinnerService: LoadingSpinnerService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequest++;
    this.loadingSpinnerService.showSpinner();
    return next.handle(req).pipe(
      delay(1000),
      finalize(
        () => {
          this.totalRequest--;
          this.loadingSpinnerService.hideSpinner();
        })
    );
  }
}
