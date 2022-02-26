import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { GeneralserviceService } from "src/app/services/generalservice.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: GeneralserviceService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(request).pipe(catchError(err => {
           if(err.status === 401) {
               this.authenticationService.logout();
               location.reload();
           }

           const error = err.error.message || err.statusText;
           return throwError(error);
       }))
    }
}