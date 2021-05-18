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

})