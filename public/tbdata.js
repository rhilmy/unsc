$(document).ready(function() {
    var table= $('#example2').DataTable( {
        
         "pageLength": 5,
         "ajax":{"url": "http://localhost:3107/get/data"} ,
         "columns": [
             { "data": "WITEL" },
             { "data": "STO" },
             { "data": "ODP_CEK" },
             { "data": "totport" },
             { "data": "used" },
             { "data": "avai" },
             { "data": "NAMA_CUSTOMER" },
             { "data": "NO_INET_CT0" },
             { "data": "UMUR_CT0" }
             
         ],
           dom:
                       "<'ui grid'"+
                          "<'row'"+
                             "<'four wide column'l>"+
                             "<'right aligned nine wide column'B>"+
                             "<'right aligned three wide column'f>"+
                          ">"+
                          "<'row dt-table'"+
                             "<'sixteen wide column'tr>"+
                          ">"+
                          "<'row'"+
                             "<'seven wide column'i>"+
                             "<'right aligned nine wide column'p>"+
                          ">"+
                       ">",
  
         buttons: [{ 
                   extend: 'excelHtml5',
                   text: 'Download excel',
                   className:'ui primary basic button buttons-excel buttons-html5'
                }]
 
 
     });
        table.buttons().container()
         .appendTo( $('div.eight.column:eq(0)', table.table().container()) );
     
     
 });