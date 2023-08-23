function calcularSuma(){

    n1 = $("#txtN1").val();
    n2 = $("#txtN2").val();

    if(n1=="" || n2 == "")
    {
        swal.fire(
            "Error",
            "Debe capturar números para N1 y N2",
            "error"
        );
    }
    else{
        res = parseInt(n1) + parseInt(n2)

        $("#txtRes").val(res)
    }

 }

 function calcularResta(){
    n1 = $("#txtN1").val();
    n2 = $("#txtN2").val();

    if(n1=="" || n2 == "")
    {
        swal.fire(
            "Error",
            "Debe capturar números para N1 y N2",
            "error"
        );
    }
    else{
        res = parseInt(n1) - parseInt(n2)

        $("#txtRes").val(res)
    }

 }
