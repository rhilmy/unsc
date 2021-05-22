$(document).ready(function() {
    $('#example3').DataTable( {
        "dom": 'rti',
        "ajax":{"url": "http://localhost:3107/get/umurct0"} ,
        "columns": [
            { "data": "witel" },
            //{ "data": "total" },
            { "data": "0bln" },
            { "data": "1-3bln" },
            { "data": "4-6bln" },
            { "data": "7-12bln" },
            { "data": "1-2thn" },
            { "data": ">2thn" },

        ],
		


        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };
			
			
			var i;
				for (i = 0; i < 7; i++) {
					
											
								// Total over all pages
								total = api
									.column(i)
									.data()
									.reduce( function (a, b) {
										return intVal(a) + intVal(b);
									}, 0 );
					 
								// Total over this page
								pageTotal = api
									.column( i, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return intVal(a) + intVal(b);
									}, 0 );
					 
								// Update footer
								$( api.column(i ).footer() ).html(
									// '$'+pageTotal +' ( $'+ total +' total)'
									total
								);
				
				}
			
 
        },
				




    });
});