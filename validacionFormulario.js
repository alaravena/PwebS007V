$(document).ready(function(){
    //Para hacer esto en 'fácil'
    //https://www.sitepoint.com/basic-jquery-form-validation-tutorial/

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

/*
Usar GIT, siempre
Web responsiva (grilla)
Tipo de "publicación" debe tener categorias (al menos 2) y "autor" o simiular
Menú superior con logo (presente en todas las páginas)
Página Principal:
Carrusel de Imágenes ("Destacados" o "ultimas publicaciones")
Búsqueda (y listado de resultados en la misma página o aparte)
Formulario de Contacto (o un link y éste en página aparte)
Las imagenes del carrusel y el listado o resultado de búsqueda debe linkear a página detalle
Pagina Detalle:
Contenidos diferenciados (titulo, autor, fechas, etc)
Galería de imágenes (minimo una)
Usuario
Página de registro
Página de Login (con link a página de registro)
Indicador si esta logueado (link a loguearse si no)

En total son minimo 4 Páginas: Principal, Detalle, Registro, Login. Pueden ser páginas aparte: Listado (y resultados de búsqueda) y Formulario de contacto
*/

//ENTREGA 2 
//FORMULARIO RESPONSIVO CON BOOTSTRAP (INCERTO EN UN CONTEXTO)
//(Mas lo que viene)
/*
Los datos que debe ingresar el usuario en el formulario son los siguientes:
▪ Nombre completo de la persona
▪ Email.
▪ Debe seleccionar si va a identificarse mediante rut o pasaporte y luego debe
ingresarlo (a futuro debemos validar).
▪ Número de teléfono (opcional)
▪ Ingresar la ciudad de residencia.
▪ Comentario que le permita a las personas señala en lo que les gustaría participar
en la ONG.
▪ Deben aparecer dos botones uno para enviar y el otro para limpiar el formulario.
*/