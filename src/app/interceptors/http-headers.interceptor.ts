import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError as observableThrowError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone(
      {
        setHeaders: {
          'x-rapidapi-key': '2a9e6de4f4msha03ca54af51f6d9p1ef01cjsnf3d218ee6e33',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        },
        setParams: {
          key: 'e40e743af2c94b0c916a8aa618fb4473',
        }
      }
    );
    return next.handle(req);
  }
}
