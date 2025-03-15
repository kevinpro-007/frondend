import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
let AppComponent = class AppComponent {
    title = 'frondend3';
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        imports: [RouterOutlet, RouterModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
