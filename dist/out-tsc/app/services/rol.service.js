import { __decorate } from "tslib";
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
let RolService = class RolService {
    http;
    myAppUrl;
    myAPIUrl;
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myAPIUrl = 'api/rol';
    }
};
RolService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RolService);
export { RolService };
