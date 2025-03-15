import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let EstablecimientosService = class EstablecimientosService {
    http;
    myAppUrl;
    myAPIUrl;
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myAPIUrl = 'api/establecimiento';
    }
    getEstablecimientos() {
        const token = localStorage.getItem('mytoken');
        // console.log("estoy en el ervicio",token)  
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.myAppUrl}${this.myAPIUrl}/read`, { headers: headers });
    }
    getEstablecimientosSelect() {
        return this.http.get(`${this.myAppUrl}${this.myAPIUrl}/read/total`);
    }
};
EstablecimientosService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EstablecimientosService);
export { EstablecimientosService };
