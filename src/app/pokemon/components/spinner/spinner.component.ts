import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import {LoadingSpinnerService} from '../../services/loading-spinner/loading-spinner.service';

@Component({
  selector: 'pkmn-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  showSpinner: boolean;

  constructor(
    private loaderSpinnerService: LoadingSpinnerService
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.loaderSpinnerService.isLoading$
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      isLoading => {
        this.showSpinner = isLoading;
      });
  }

}
