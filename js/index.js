 function getClientes(){
    $.post("modulos/clientes/getClientes.php",{})
    .done(function(data)
    {
        $("advContainer").html("");
        $("advContainer").html(data);
    });
 }

 $( document ).ready( function(){
    getClientes();
})
