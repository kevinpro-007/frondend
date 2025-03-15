import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { SpinnerComponent } from "../shared/spinner/spinner.component";
import { ErrorService } from '../../services/error.service';
import { Establecimiento } from '../../interfaces/establecimientos';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { log } from 'console';

@Component({
  selector: 'app-sing-in',
  imports: [RouterModule, FormsModule,
    CommonModule, SpinnerComponent],

  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent implements OnInit { 
    listEstablecimiento: Establecimiento[] = [];
    item: any; 
    
  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private _mensajeError : ErrorService,
    private _Establecimientos: EstablecimientosService
  ) { }
  ngOnInit(): void {
    this.getEsteblecimiento();
  }
  getEsteblecimiento() {
    this._Establecimientos.getEstablecimientosSelect().subscribe(data => {
      this.listEstablecimiento = data
      console.log(data)
    })
  }

  ci: string = "";
  nombre: string = "";
  apellido: string = "";
  email: string = "";
  password: string = "";  
  repitpassword: string = "";
  establecimiento_ci: string = "";
  codr : string ="101";

  loading: boolean = false
  addUser() {
    if (this.ci == "" || this.nombre == "" || this.apellido == "" || this.email == "" || this.password == "" || this.repitpassword == "" || this.establecimiento_ci == "" ) {
      this.toastr.error("TODOS LOS CAMPOS SON OBLIGATORIOS!! ");
      return
    }
    if (this.password != this.repitpassword) {
      this.toastr.info("CONTRASEÑAS INCORRECTAS")
      return
    }
    const user: User = {
      ci: this.ci,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password,
      establecimiento_ci:this.establecimiento_ci,
      codr : this.codr   
    }  
    console.log(user);
     
    this.loading = true

    this.userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false
        this.toastr.success('Usuario Nuevo Creado!!');
        this.router.navigate(['/logIn']);
      },
      error: (e : HttpErrorResponse) => {
        this.loading = false
        this._mensajeError.msgError(e)
      },
      complete: () => console.info('completo')
    })
  }
}
