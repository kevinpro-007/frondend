import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const _mensajeError = inject(ErrorService)

  const token = localStorage.getItem("mytoken");

  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
  }

  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    if (error.status === 401) {
      _mensajeError.msgError(error)
      router.navigate(['/logIn'])
    }
    return throwError(() => error)

  }))

}


