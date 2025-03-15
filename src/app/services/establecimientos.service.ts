import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establecimiento } from '../interfaces/establecimientos';
import { environment } from '../../environments/environment';
import { Rol } from '../interfaces/rols';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosService {

  private myAppUrl: string;
  private myAPIUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myAPIUrl = 'api/establecimiento';
    
  }

  getEstablecimientos(): Observable<Establecimiento[]>{
    const token = localStorage.getItem('mytoken')
    // console.log("estoy en el ervicio",token)  
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
     return this.http.get<Establecimiento[]>(`${this.myAppUrl}${this.myAPIUrl}/read`, {headers: headers});
  }
  getEstablecimientosSelect(): Observable<Establecimiento[]>{    
     return this.http.get<Establecimiento[]>(`${this.myAppUrl}${this.myAPIUrl}/read/total`);
  }

}