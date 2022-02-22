import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxOfflineInterceptorService } from './ngx-offline-interceptor.service';
import { NgxOfflineInterceptor } from './ngx-offline.interceptor';

export class NgxOfflineInterceptorOptions {
  loader?: Provider;
  displayToast?: boolean;
  contentOffline?: string;
  contentBackOnline?: string;
  toastDuration?: number;
}

export const NGX_OFFLINE_INTERCEPTOR_OPTIONS =
  new InjectionToken<NgxOfflineInterceptorOptions>(
    'Offline interceptor Options'
  );

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, CommonModule, MatSnackBarModule],
})
export class NgxOfflineInterceptorModule {
  static forRoot(
    options?: NgxOfflineInterceptorOptions
  ): ModuleWithProviders<NgxOfflineInterceptorModule> {
    return {
      ngModule: NgxOfflineInterceptorModule,
      providers: [
        NgxOfflineInterceptorService,
        { provide: 'config', useValue: options || { displayToast: true } },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NgxOfflineInterceptor,
          multi: true,
        },
      ],
    };
  }
}
