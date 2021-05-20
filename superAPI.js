$(document).ready(function() {

    $('#traer-comida').click(function() {
        $.get({
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
            success: function(response) {

                /*
                var tabla = $('#cat-comidas tbody')
                tabla.empty()
              
                $.each(response.categories, function(index, elemento){
                    console.log(elemento);
                    tabla.append("<tr>" +
                    "<th scope='row'>" + elemento.idCategory + "</th>" +
                    "<td>" + elemento.strCategory + "</td>" +
                    "<td><img src='" + elemento.strCategoryThumb + "' alt='" + elemento.strCategory + "' /></td>" +
                    "<td>" + elemento.strCategoryDescription + "</td>" +
                    "</tr>")
                })
                */

                var contenedor = $('#cards-container')
                contenedor.empty()

                $.each(response.categories, function(i, categoria) {
                    contenedor.append("<div class='card'>" +
                        "<img src='" + categoria.strCategoryThumb + "' class='card-img-top' alt='" + categoria.strCategory + "'>" +
                        "<div class='card-body'>"+
                        "<h5 class='card-title'>" + categoria.strCategory + "</h5>" +
                        "<p class='card-text'>" + categoria.strCategoryDescription + "</p>" +
                    "</div></div>")
                });
            },
            error: function(e) {
                console.error(e)
            }
        });
    })

    $('#traer-sw').click(function() {
        $.get({
            url: 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json',
            success: function(listado) {

                var contenedor = $('#cards-container')
                contenedor.empty()

                $.each(listado, function(i, personaje) {
                    contenedor.append("<div class='card'>" +
                        "<img src='" + personaje.image + "' class='card-img-top' alt='" + personaje.name + "'>" +
                        "<div class='card-body'>"+
                        "<h5 class='card-title'>" + personaje.name + "</h5>" +
                        "<p class='card-text'><b>Especie: </b>" + personaje.species + 
                        "</p><p><b>Mundo de origen: </b>" + personaje.homeworld + "</p>" +
                    "</div></div>")

                    console.log(personaje)
                });
                
            },
            error: function(e) {
                console.error(e)
            }
        });
    })

    $('#traer-pokemon').click(function(){
        $.get({
            url:'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100',
            success: function(datos) {
                var contenedor = $('#cards-container')
                contenedor.empty()

                $.each(datos.results, function(i, pokemon) {

                    $.get({
                        url: pokemon.url,
                        success: function(detPokemon){
                            console.log(detPokemon)
                            contenedor.append("<div class='card'>" +
                                "<img src='" + detPokemon.sprites.front_default + "' class='card-img-top' alt='" + pokemon.name + "'>" +
                                "<div class='card-body'>"+
                                "<h5 class='card-title'>" + pokemon.name + "</h5>" +
                                "<p class='card-text'><b>Especie: </b>" + detPokemon.species.name + "</p>"+
                            "</div></div>")
                        },
                        error: function(e){
                            console.error(e)
                        }
                    })

                 
                })
            },
            error: function(e){
                console.error(e)
            }
        });
    })

    $('#traer-spotify').click(function(){
        var idArtista = $('#id-artista').val()
        var token = $('#token').val()
        //var token = 'BQAZhsOrKlxA-K7RxMpGvTjbi9_s9l4usVKvLPNC0lAxozczl78XjhAUi16w4Aik8g7flXx9stLGY6ZKltoqSMmUxmkdlWMdv3wbYRKJYUa0cgwhxsZSqnHTYuoUBMiuKTQ-TO2luAoHlAw'
        $.get({
            url: 'https://api.spotify.com/v1/artists/' + idArtista +'/albums',
            headers: {
                Authorization: 'Bearer ' + token
            },
            success: function(respuestaOK){
                var contenedor = $('#cards-container')
                contenedor.empty()

                $.each(respuestaOK.items, function(indice, album){
                    contenedor.append("<div class='card'>" +
                                "<img src='" + album.images[1].url + "' class='card-img-top' alt='" + album.name + "'>" +
                                "<div class='card-body'>"+
                                "<h5 class='card-title'>" + album.name + "</h5>" +
                                "<p class='card-text'><b>Lanzamiento: </b>" + album.release_date + "</p>"+
                            "</div></div>")
                })

            },
            error: function(respuestaError){
                console.error(respuestaError);
            }
        })
    })

    $('#traer-marvel').click(function(){
        var PRIV_KEY = "37fafc89e443344d000759ac31aefc70180f4f02";
        var PUBLIC_KEY = "dbb3041a457cd17a26f5c1caf639467b";
        var timeStamp = new Date().getTime();
        var hash = CryptoJS.MD5(timeStamp + PRIV_KEY + PUBLIC_KEY).toString();

        var characterId = '1009718'; // wolverine

        var datosAEnviar = {
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: hash,
            characters: characterId
        }

        var urlBase = 'http://gateway.marvel.com:80/v1/public/comics'

        $.get({
            url: urlBase,
            data: datosAEnviar,
            success: function(respuestaOK){
                var contenedor = $('#cards-container')
                contenedor.empty()

                $.each(respuestaOK.data.results, function(indice, comic){

                    var imagen = comic.thumbnail.path + "/portrait_medium." + comic.thumbnail.extension

                    contenedor.append("<div class='card'>" +
                                "<img src='" + imagen + "' class='card-img-top' alt='" + comic.title + "'>" +
                                "<div class='card-body'>"+
                                "<h5 class='card-title'>" + comic.title + "</h5>" +
                                "<p class='card-text'><b>Lanzamiento: </b>" + comic.description + "</p>"+
                            "</div></div>")
                            console.log(comic)

                })
            },
            error: function(respuestaError){
                console.error(respuestaError);
            }
        })
    })

})