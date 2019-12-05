import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpEventType} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept request', req);

    const cloned = req.clone({//если модифицировать существующий request все перестанет работать
      headers: req.headers.append('Auth', 'some render tocken')
    });
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type == HttpEventType.Response) {
          console.log('Interceptor response', event);
        }
      })
    );
  }

}
