import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../services/error.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private _mensajeError: ErrorService
  ) { }
  ngOnInit(): void {
    //alert("Cierre de Sesion Automatica")
    localStorage.removeItem('mytoken');
  }


  email: string = "";
  password: string = "";

  loading: boolean = false

  login() {

    if (this.email == "" || this.password == "") {
      this.toastr.error("TODOS LOS CAMPOS SON OBLIGATORIOS!! ");
      return
    }
    const user: User = {
      email: this.email,
      password: this.password,

    }

    this.loading = true

    this.userService.logIn(user).subscribe({
      next: (response: any) => {
        const token = response.token
        this.loading = false
        this.toastr.success('BIENVENIDO!!');
        this.router.navigate(['/dashboard']);
        localStorage.setItem('mytoken', token)
        //this.userService.datosUsuario();
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false
        this._mensajeError.msgError(e)
        localStorage.removeItem('mytoken')
      }
    })
  }
  loginEnter(event:KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (this.email == "" || this.password == "") {
        this.toastr.error("TODOS LOS CAMPOS SON OBLIGATORIOS!! ");
        return
      }
      const user: User = {
        email: this.email,
        password: this.password,
    
      }
  
      this.loading = true
     
         this.userService.logIn(user).subscribe({        
        next: (response : any) => {
          const token = response.token       
          this.loading = false
          this.toastr.success('BIENVENIDO!!');
          this.router.navigate(['/dashboard']);
          localStorage.setItem('mytoken',token)
          //this.userService.datosUsuario();
        },
        error: (e : HttpErrorResponse) => {
          this.loading = false
          this._mensajeError.msgError(e)
          localStorage.removeItem('mytoken')
        }
      })
    }
  }
}


