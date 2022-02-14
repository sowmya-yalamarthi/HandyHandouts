import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, finalize, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {


  constructor(private http: HttpClient) { }


  saveMessage(reqObj: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "test/create", reqObj).pipe(map(user => {
      return true;
    }),
      finalize(() => { }),
      catchError((error: any) => {
        return of(false);
      }));
  }

  getMessage() {
    return this.http.get(environment.baseUrl + 'test/message').pipe(map((messages : any) => {
      if (messages) {
        return messages;
      }
    }))
  }
}


