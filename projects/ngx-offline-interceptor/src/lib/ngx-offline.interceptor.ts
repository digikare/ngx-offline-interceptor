import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { NgxOfflineInterceptorService } from './ngx-offline-interceptor.service';

@Injectable()
export class NgxOfflineInterceptor implements HttpInterceptor {

    get isOnline() {
        return navigator.onLine;
    }

    constructor(private readonly _service: NgxOfflineInterceptorService) {
    }


    intercept(
        request: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.isOnline) {
            return next.handle(request);
        } else {
            return EMPTY;
        }
    }
}
