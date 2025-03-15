import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer/';
import { Menus } from '../interfaces/menus';

@Injectable({ providedIn: 'root' })
export class MenuService {

  private myAppUrl: string;
  private myAPIUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myAPIUrl = 'api/menu';
  }

  datoMenus(): Observable<Menus[]> {
    const tokens = localStorage.getItem('mytoken')
    const token = JSON.stringify(tokens);
    const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    return this.http.get<Menus[]>(`${this.myAppUrl}${this.myAPIUrl}/read_date:?` + "email=" + decoded.email);
  }

}
