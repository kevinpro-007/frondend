import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer/';

@Injectable({ providedIn: 'root' })
export class UserService {

  private myAppUrl: string;
  private myAPIUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myAPIUrl = 'api/usuario';

  }

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myAPIUrl}/register`, user);
  }
  logIn(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myAPIUrl}/login`, user);
  }

  datosUsuario(): Observable<User[]> {
    const tokens = localStorage.getItem('mytoken')
    const token = JSON.stringify(tokens);
    const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    return this.http.get<User[]>(`${this.myAppUrl}${this.myAPIUrl}/read_date:?` + "email=" + decoded.email);
  }
  datoMenus(): Observable<User[]> {
    const tokens = localStorage.getItem('mytoken')
    const token = JSON.stringify(tokens);
    const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    return this.http.get<User[]>(`${this.myAppUrl}${this.myAPIUrl}/read_date:?` + "email=" + decoded.email);
  }

}
