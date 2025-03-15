import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ErrorService = class ErrorService {
    toastr;
    constructor(toastr) {
        this.toastr = toastr;
    }
    msgError(e) {
        if (e.error.msg) {
            console.log(e.error.msg);
            this.toastr.warning(e.error.msg, 'Error');
        }
        else {
            this.toastr.error("Upps, ocurrio un error, comunicate con el administrador", "Error");
        }
    }
};
ErrorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ErrorService);
export { ErrorService };
