import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';
import { NgxOfflineInterceptorOptions } from './ngx-offline-interceptor.module';

@Injectable()
export class NgxOfflineInterceptorService {
  _onlineChanges$ = fromEvent(window, 'online').pipe(mapTo(true));
  _offlineChanges$ = fromEvent(window, 'offline').pipe(mapTo(true));

  _alreadyOffline = false;

  constructor(@Inject('config') protected options: NgxOfflineInterceptorOptions,
    private readonly _snackBar: MatSnackBar) {
    this.setup();
  }

  setConfig(options: NgxOfflineInterceptorOptions) {
    this.options = { ...options };
  }

  private setup() {

    this._offlineChanges$.subscribe((res) => {
      this._alreadyOffline = true;
      this.displayToast(this.options.contentOffline || 'You are offline');
      this._onlineChanges$.pipe(take(1)).subscribe((res) => {
        this.displayToast(this.options.contentBackOnline || 'You are now online');
      });
    });
  }

  private displayToast(message: string) {
    this._snackBar.open(message, null, {
      duration: this.options.toastDuration || 2000
    }
    );
  }
}
