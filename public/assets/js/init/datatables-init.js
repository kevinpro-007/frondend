(function ($) {
    //    "use strict";


    /*  Data Table
    -------------*/
	$.extend( true, $.fn.dataTable.defaults, {
		"language": {
			"decimal": ",",
			"thousands": ".",
			"info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
			"infoPostFix": "",
			"infoFiltered": "(filtrado de un total de _MAX_ registros)",
			"loadingRecords": "Cargando...",
			"lengthMenu": "Mostrar _MENU_ registros",
			"paginate": {
				"first": "Primero",
				"last": "Último",
				"next": "Siguiente",
				"previous": "Anterior"
			},
			"processing": "Procesando...",
			"search": "Buscar:",
			"searchPlaceholder": "Término de búsqueda",
			"zeroRecords": "No se encontraron resultados",
			"emptyTable": "Ningún dato disponible en esta tabla",
			"aria": {
				"sortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sortDescending": ": Activar para ordenar la columna de manera descendente"
			},
			//only works for built-in buttons, not for custom buttons
			"buttons": {
				"create": "Nuevo",
				"edit": "Cambiar",
				"remove": "Borrar",
				"copy": "Copiar",
				"csv": "fichero CSV",
				"excel": "tabla Excel",
				"pdf": "documento PDF",
				"print": "Imprimir",
				"colvis": "Visibilidad columnas",
				"collection": "Colección",
				"upload": "Seleccione fichero...."
			},
			"select": {
				"rows": {
					_: '%d filas seleccionadas',
					0: 'clic fila para seleccionar',
					1: 'una fila seleccionada'
				}
			}
		}           
	} );    

	$('#example').DataTable({
		"language": {
		  "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
		}
	  });

    $('#bootstrap-data-table').DataTable({
        lengthMenu: [[5, 10, 10, -1], [5, 10, 25, "All"]],
    });



    $('#bootstrap-data-table-export').DataTable({
        dom: 'lBfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
	
	$('#row-select').DataTable( {
			initComplete: function () {
				this.api().columns().every( function () {
					var column = this;
					var select = $('<select class="form-control"><option value=""></option></select>')
						.appendTo( $(column.footer()).empty() )
						.on( 'change', function () {
							var val = $.fn.dataTable.util.escapeRegex(
								$(this).val()
							);
	 
							column
								.search( val ? '^'+val+'$' : '', true, false )
								.draw();
						} );
	 
					column.data().unique().sort().each( function ( d, j ) {
						select.append( '<option value="'+d+'">'+d+'</option>' )
					} );
				} );
			}
		} );






})(jQuery);