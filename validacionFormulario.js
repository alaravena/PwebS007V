$(document).ready(function(){
    console.log("Dom cargado")

    $('#username').blur(function() {
        if ($(this).val() == "") {
            console.log("Por favor ingresa un username");

            $('#alert').fadeIn('slow').text('Rellena campo usuario')
        } else {
            console.log("dejó el input " + $(this).val());
            $('#alert').fadeOut('slow')
        }
    });

    $('#nombre').change(function(){
        console.log("Cambió el contenido y salió del imput");
    });

    $('#edad').focus(function(){
        console.log("Entré al input")
        $(this).css("background-color", "yellow")
    });

    $('#edad').blur(function(){
        console.log("salí del input")
        $(this).css("background-color", "#C1C1C1")
    });

    $('#cualquier').select(function(){
        console.log("texto seleccionado en el input cualquier")
    })

    $('#cualquier').keyup(function(){
        var valor = $(this).val()

        if( valor != "" ) {
            $('#cosa').text("Bienvenid@:" + valor)
        } else {
            $('#cosa').text("")
        }

        $('#alert').fadeOut('slow')
    })

    $('#formulario').submit(function() {
        if ($('#username').val() == "") {
            event.preventDefault();
            console.log("Se frenó el envio del formulario")
            $('#alert').text("Rellena el Username")
            $('#alert').fadeIn('slow')
        } else {
            console.log("Se envió el formulario")
        }
        
    })
})