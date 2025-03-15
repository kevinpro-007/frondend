import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
let DashboardComponent = class DashboardComponent {
    _Establecimientos;
    _Menu;
    listEstablecimiento = [];
    item;
    listMenu = [];
    itemM;
    constructor(_Establecimientos, _Menu) {
        this._Establecimientos = _Establecimientos;
        this._Menu = _Menu;
    }
    ngOnInit() {
        this.getEsteblecimiento();
        this.getMenus();
    }
    getEsteblecimiento() {
        this._Establecimientos.getEstablecimientos().subscribe(data => {
            this.listEstablecimiento = data;
            //console.log(data);
        });
    }
    getMenus() {
        this._Menu.datoMenus().subscribe(data => {
            const moneyDatas = Object.entries(data).map(i => i[1]);
            this.listMenu = moneyDatas.concat(moneyDatas[0]);
            //console.log(moneyDatas[0]);
        });
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        imports: [RouterModule, FormsModule,
            CommonModule, NavbarComponent],
        templateUrl: './dashboard.component.html',
        styleUrl: './dashboard.component.css'
    })
], DashboardComponent);
export { DashboardComponent };
