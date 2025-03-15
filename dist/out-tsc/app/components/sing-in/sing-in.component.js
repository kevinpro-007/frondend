import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "../shared/spinner/spinner.component";
let SingInComponent = class SingInComponent {
    toastr;
    userService;
    router;
    _mensajeError;
    _Establecimientos;
    listEstablecimiento = [];
    item;
    constructor(toastr, userService, router, _mensajeError, _Establecimientos) {
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this._mensajeError = _mensajeError;
        this._Establecimientos = _Establecimientos;
    }
    ngOnInit() {
        this.getEsteblecimiento();
    }
    getEsteblecimiento() {
        this._Establecimientos.getEstablecimientosSelect().subscribe(data => {
            this.listEstablecimiento = data;
            console.log(data);
        });
    }
    ci = "";
    nombre = "";
    apellido = "";
    email = "";
    password = "";
    repitpassword = "";
    establecimiento_ci = "";
    codr = "101";
    loading = false;
    addUser() {
        if (this.ci == "" || this.nombre == "" || this.apellido == "" || this.email == "" || this.password == "" || this.repitpassword == "" || this.establecimiento_ci == "") {
            this.toastr.error("TODOS LOS CAMPOS SON OBLIGATORIOS!! ");
            return;
        }
        if (this.password != this.repitpassword) {
            this.toastr.info("CONTRASEÑAS INCORRECTAS");
            return;
        }
        const user = {
            ci: this.ci,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            password: this.password,
            establecimiento_ci: this.establecimiento_ci,
            codr: this.codr
        };
        console.log(user);
        this.loading = true;
        this.userService.signIn(user).subscribe({
            next: (v) => {
                this.loading = false;
                this.toastr.success('Usuario Nuevo Creado!!');
                this.router.navigate(['/logIn']);
            },
            error: (e) => {
                this.loading = false;
                this._mensajeError.msgError(e);
            },
            complete: () => console.info('completo')
        });
    }
};
SingInComponent = __decorate([
    Component({
        selector: 'app-sing-in',
        imports: [RouterModule, FormsModule,
            CommonModule, SpinnerComponent],
        templateUrl: './sing-in.component.html',
        styleUrl: './sing-in.component.css'
    })
], SingInComponent);
export { SingInComponent };
