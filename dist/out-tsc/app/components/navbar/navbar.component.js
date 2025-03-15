import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
let NavbarComponent = class NavbarComponent {
    router;
    _User;
    data1 = [];
    items;
    constructor(router, _User) {
        this.router = router;
        this._User = _User;
    }
    ngOnInit() {
        this.getUsuario();
    }
    logOut() {
        localStorage.removeItem("mytoken");
        this.router.navigate(['/logIn']);
    }
    getUsuario() {
        this._User.datosUsuario().subscribe(data => {
            const moneyDatas = Object.entries(data).map(i => i[1]);
            this.data1 = moneyDatas;
        });
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        imports: [RouterModule, FormsModule, CommonModule
        ],
        templateUrl: './navbar.component.html',
        styleUrl: './navbar.component.css'
    })
], NavbarComponent);
export { NavbarComponent };
