import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Buffer } from 'buffer/';
let UserService = class UserService {
    http;
    myAppUrl;
    myAPIUrl;
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myAPIUrl = 'api/usuario';
    }
    signIn(user) {
        return this.http.post(`${this.myAppUrl}${this.myAPIUrl}/register`, user);
    }
    logIn(user) {
        return this.http.post(`${this.myAppUrl}${this.myAPIUrl}/login`, user);
    }
    datosUsuario() {
        const tokens = localStorage.getItem('mytoken');
        const token = JSON.stringify(tokens);
        const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        return this.http.get(`${this.myAppUrl}${this.myAPIUrl}/read_date:?` + "email=" + decoded.email);
    }
    datoMenus() {
        const tokens = localStorage.getItem('mytoken');
        const token = JSON.stringify(tokens);
        const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        return this.http.get(`${this.myAppUrl}${this.myAPIUrl}/read_date:?` + "email=" + decoded.email);
    }
};
UserService = __decorate([
    Injectable({ providedIn: 'root' })
], UserService);
export { UserService };
