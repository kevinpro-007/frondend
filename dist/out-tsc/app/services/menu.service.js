import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Buffer } from 'buffer/';
let MenuService = class MenuService {
    http;
    myAppUrl;
    myAPIUrl;
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myAPIUrl = 'api/menu';
    }
    datoMenus() {
        const tokens = localStorage.getItem('mytoken');
        const token = JSON.stringify(tokens);
        const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        return this.http.get(`${this.myAppUrl}${this.myAPIUrl}/read_date:?` + "email=" + decoded.email);
    }
};
MenuService = __decorate([
    Injectable({ providedIn: 'root' })
], MenuService);
export { MenuService };
