import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoading.asObservable();

  constructor() { }

  showSpinner(): void {
    this.isLoading.next(true);
  }

  hideSpinner(): void {
    this.isLoading.next(false);
  }

}
