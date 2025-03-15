import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { log } from 'console';
import { DatosP } from '../../interfaces/datosPersonales';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, FormsModule, CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 
  data1: DatosP[] = [];
  items: any;

  constructor(
    private router: Router, private _User: UserService) {
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  logOut() {
    localStorage.removeItem("mytoken");
    this.router.navigate(['/logIn'])
  }
  getUsuario() {
    this._User.datosUsuario().subscribe(data => {
      const moneyDatas = Object.entries(data).map(i => i[1]);
     // console.log(moneyDatas);
     // console.log(data);
      
      this.data1 = moneyDatas;
    })
  }
}
