import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, finalize, catchError, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../modules/models/user';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {


  constructor(private http: HttpClient) { }
  [x: string]: any;
  currentUser: User | undefined;
  currentUserInfo: User | undefined;
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  };

  getUser(reqObj: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "auth/login", reqObj).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
      console.log(this.currentUser);
      return true;
    }),
      finalize(() => { }),
      catchError((error: any) => {
        return of(false);
      }));
  }

  registerUser(reqObj: any) {

    return this.http.post(environment.baseUrl + "auth/signup", reqObj, { responseType: 'text' });
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + "auth/userInfo").pipe(map(userInfo => {
      this.currentUserInfo = userInfo;
      localStorage.setItem('currentUserInfo', JSON.stringify(userInfo));
      this.currentUserInfo = <User>(JSON.parse(localStorage.getItem('currentUserInfo')!));
      return userInfo;
    }))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserInfo');
    this.currentUserInfo={};
    this.currentUser={};
}
getBooks():Observable<any> {
  return this.http.get<any>(environment.baseUrl +"book/all").pipe(map(data=>{
    return data;
  }))
}


}


