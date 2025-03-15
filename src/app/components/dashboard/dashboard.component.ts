import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { Establecimiento } from '../../interfaces/establecimientos';

import { Menus } from '../../interfaces/menus';
import { MenuService } from '../../services/menu.service';
import { YoutubescriptService } from '../../services/youtube.service';

import { DataTableService } from '../../services/datatable.service';


import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { log } from 'console';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, FormsModule,
    CommonModule, NavbarComponent, FullCalendarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'

})
export class DashboardComponent implements OnInit {
  listEstablecimiento: Establecimiento[] = [];
  item: any;
  listMenu: Menus[] = [];
  itemM: any;

  constructor(
    private _Establecimientos: EstablecimientosService,
    private _Menu: MenuService,
    private router: Router,
    private youtubeservice: YoutubescriptService,
    private datatable: DataTableService
  ) { }

  ngOnInit(): void {
    //this.youtubeservice.loadScript();
    const token = localStorage.getItem("mytoken")
    console.log(token);
    if (token == null) {
     
     this.router.navigateByUrl("/errorPage")
 
    } else {
      this.getEsteblecimiento();
      this.getMenus();
      this.datatable.datatable();
      console.log("adentro");
      
    }
  }
 redireccionando(){

      this.router.navigate(["/logIn"]);
 
 }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: "es",
    plugins: [dayGridPlugin]
  };

  getEsteblecimiento() {
    this._Establecimientos.getEstablecimientos().subscribe(data => {
      this.listEstablecimiento = data;
      // console.log(data);

    })
  }
  getMenus() {
    this._Menu.datoMenus().subscribe(data => {
      const moneyDatas = Object.entries(data).map(i => i[1]);
      this.listMenu = moneyDatas.concat(moneyDatas[0]);
      console.log(moneyDatas[0]);


    })
  }


}
