import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class YoutubescriptService {
 
  constructor() { }
 
  public loadScript() {
    console.log('preparing to load...')

      ///cargando bootstrap
      let node0 = document.createElement('script');
      node0.src = 'assets/js/init/bootstrap.min.js';
      node0.type = 'text/javascript';
      node0.async = true;
    /////////cargando moment.js
    let node1 = document.createElement('script');
    node1.src = 'assets/js/init/moment.min.js';
    node1.type = 'text/javascript';
    node1.async = true;
    ///////fullcalendar
    let node2 = document.createElement('script');
    node2.src = 'assets/js/init/fullcalendar.min.js';
    node2.type = 'text/javascript';
    node2.async = true;
    ////creandoel cdn full calendary
    let node3 = document.createElement('script');
    node3.src = 'assets/js/init/fullcalendar-init.js';
    node3.type = 'text/javascript';
    node3.async = true;

    document.getElementsByTagName('head')[0].appendChild(node0);
    document.getElementsByTagName('head')[0].appendChild(node1);
    document.getElementsByTagName('head')[0].appendChild(node2);
    document.getElementsByTagName('head')[0].appendChild(node3);
  }
}