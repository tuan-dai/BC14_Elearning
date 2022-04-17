import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let accessToken = '';
    if (localStorage.getItem(environment.userLogin)) {
      accessToken = JSON.parse(
        localStorage.getItem(environment.userLogin) || '{}'
      ).accessToken;
    }

    const apiRequest = req.clone({
      headers: req.headers
        .set(environment.tokenCybersoft, environment.token)
        .set(environment.authorization, `Bearer ${accessToken}`),
    });

    return next.handle(apiRequest);
  }
}
