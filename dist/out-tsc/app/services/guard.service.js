import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let GuardService = class GuardService {
    router;
    constructor(router) {
        this.router = router;
    }
    canDeactivate() {
        const token = localStorage.getItem('myToken');
        if (!token) {
            this.router.navigate(['/logIn']);
            return false;
        }
        return true;
    }
};
GuardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GuardService);
export { GuardService };
