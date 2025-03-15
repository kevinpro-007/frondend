import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
let LoginComponent = class LoginComponent {
    toastr;
    userService;
    router;
    _mensajeError;
    constructor(toastr, userService, router, _mensajeError) {
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this._mensajeError = _mensajeError;
    }
    ngOnInit() {
        //alert("Cierre de Sesion Automatica")
        localStorage.removeItem('mytoken');
    }
    email = "";
    password = "";
    loading = false;
    login() {
        if (this.email == "" || this.password == "") {
            this.toastr.error("TODOS LOS CAMPOS SON OBLIGATORIOS!! ");
            return;
        }
        const user = {
            email: this.email,
            password: this.password,
        };
        this.loading = true;
        this.userService.logIn(user).subscribe({
            next: (response) => {
                const token = response.token;
                this.loading = false;
                this.toastr.success('BIENVENIDO!!');
                this.router.navigate(['/dashboard']);
                localStorage.setItem('mytoken', token);
                //this.userService.datosUsuario();
            },
            error: (e) => {
                this.loading = false;
                this._mensajeError.msgError(e);
                localStorage.removeItem('mytoken');
            }
        });
    }
    loginEnter(event) {
        if (event.key === 'Enter') {
            if (this.email == "" || this.password == "") {
                this.toastr.error("TODOS LOS CAMPOS SON OBLIGATORIOS!! ");
                return;
            }
            const user = {
                email: this.email,
                password: this.password,
            };
            this.loading = true;
            this.userService.logIn(user).subscribe({
                next: (response) => {
                    const token = response.token;
                    this.loading = false;
                    this.toastr.success('BIENVENIDO!!');
                    this.router.navigate(['/dashboard']);
                    localStorage.setItem('mytoken', token);
                    //this.userService.datosUsuario();
                },
                error: (e) => {
                    this.loading = false;
                    this._mensajeError.msgError(e);
                    localStorage.removeItem('mytoken');
                }
            });
        }
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        imports: [RouterModule, FormsModule,
            CommonModule],
        templateUrl: './login.component.html',
        styleUrl: './login.component.css'
    })
], LoginComponent);
export { LoginComponent };
