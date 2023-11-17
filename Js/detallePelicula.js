let API_KEY          =  "8b6eae301b66732ee0ec9cb7d499ade8"
let as               = location.search;
let obas             = new URLSearchParams(as);
let id               = obas.get("id");
let detallePelicula  = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

let portadaPel      = document.querySelector("#imgPortadaPel");
let tituloPel       = document.querySelector("#h1Titulo");
let fechaEstrenoPel = document.querySelector("#fechadeEstreno");
let sinopsisPel     = document.querySelector("#sinopsisPel");
let duracion        = document.querySelector("#duracionPel");
let calificacion    = document.querySelector("#calificacionPel"); 
let generos         = document.querySelector("#generoPel");

let peliculasDetalle = document.querySelector(".sectionbreaking");
console.log(peliculasDetalle);

fetch(detallePelicula)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let detallePelis = "";
    for (let index = 0; index < data.genres.length; index++) {
        detallePelis += `${data.genres[index].name}`
    }

    portadaPel.src            = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    tituloPel.innerText       = data.original_title;
    fechaEstrenoPel.innerText = "Estreno: " + data.release_date;
    sinopsisPel.innerText     = "Sinopsis: " + data.overview;     
    duracion.innerText        = "Duracion:" + " " + data.runtime;
    calificacion.innerText    = "Calificacion: " + data.vote_average
    generos.innerText         = "Generos: " + detallePelis;

    return data; 
})

.catch(function(errors) {
    console.log(errors);
    return errors;
})

/*boton recomendados*/

let contenedor = document.querySelector("#contenedor");
let buton      = document.querySelector("#botonReco");
let recomendar = document.querySelector("#recomendacion");


buton.addEventListener(`click`, function (e){
        let hola = `
        `;
        console.log(hola)

        fetch(hola)
            .then(function (response){
                 return response.json()
            })
            .then(function(data) {
                console.log(data);
                contenedor.style.display = "block";
                let info = "";
                for (let index = 0; index < 4; index++) {
                    info += ` <a class = "aHome" href = "./detallePelicula.html?id=${data.results[index].id}">
                                <article class = "ArtHome">
                                   <img id="imgHome" class="imgHome
                                   " src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="portada pelicula"
                                   <p class = "pTopratedDO1">${data.results[index].title}</p>
                                   <p class = "pTopratedDP2">${data.results[index].release_date}</p>
                                </article>
                              </a>`
                               
            }
            recomendar.innerHTML = info;
            })

    .catch(function(error){
        console.log(error);
    })
})




