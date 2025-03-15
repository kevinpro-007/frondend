import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataTableService {

    constructor() { }

    public datatable() {

        /////////cargando moment.js
        let estilo = document.createElement('link');
        estilo.href = 'assets/css/lib/datatable/dataTables.bootstrap.min.css';
        estilo.rel = 'stylesheet';
        
        /////////cargando data table.js
        let node1 = document.createElement('script');
        node1.src = 'assets/js/lib/data-table/datatables.min.js';
        node1.type = 'text/javascript';

        ///////Script boosttrap
        let node2 = document.createElement('script');
        node2.src = 'assets/js/lib/data-table/dataTables.bootstrap.min.js';
        node2.type = 'text/javascript';
     
        ///cargando data init
        let node0 = document.createElement('script');
        node0.src = 'assets/js/init/datatables-init.js';
        node0.type = 'text/javascript';
       
        document.getElementsByTagName('head')[0].appendChild(estilo);
        document.getElementsByTagName('script')[0].appendChild(node1);
        document.getElementsByTagName('script')[0].appendChild(node2);
        document.getElementsByTagName('script')[0].appendChild(node0);
    
    }
}