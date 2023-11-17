let API_KEY          =  "8b6eae301b66732ee0ec9cb7d499ade8"
let as               = location.search;
let obas             = new URLSearchParams(as);
let id               = obas.get("id");
let detalleSerie     = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`
let recomendaciones  =  `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`;
let portadaSerie         = document.querySelector("#imgPortadaSerie");
let tituloSerie          = document.querySelector("#h1TituloSer");
let fechaEstrenoSerie    = document.querySelector("#fechadeEstrenoSer");
let sinopsisSerie        = document.querySelector("#sinopsisSerie");
let duracionSerie        = document.querySelector("#duracionSerie");
let calificacionSerie    = document.querySelector("#calificacionSerie"); 
let generosSerie         = document.querySelector("#generoSerie");

let serieDetalle = document.querySelector(".sectionbreakingSer");
console.log(serieDetalle);

fetch(detalleSerie)

.then(function(response) {
    
    return response.json();
})
.then(function(data) {
    console.log(data);
    let detalleSerie = "";
    for (let index = 0; index < data.genres.length; index++) {
        detalleSerie += `${data.genres[index].name}`
    }

    portadaSerie.src               = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    tituloSerie.innerText          = data.name;
    fechaEstrenoSerie.innerText    = "Estreno: " + data.first_air_date;
    sinopsisSerie.innerText        = "Sinopsis: " + data.overview;     
    duracionSerie.innerText        = "Duracion:" + " " + data.runtime;
    calificacionSerie.innerText    = "Calificacion: " + data.vote_average
    generosSerie.innerText         = "Generos: " + detallePelis;

    return data; 
})

.catch(function(errors) {
    console.log(errors);
    return errors;
})

/*boton recomendados*/

let contenedor = document.querySelector("#contenedorSerie");
let buton      = document.querySelector("#botonRecoSerie");
let recomendar = document.querySelector("#recomendacionSerie");


buton.addEventListener(`click`, function (e){
        let hola = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        console.log(hola)

        fetch(recomendaciones)
            .then(function (response){
                 return response.json()
            })
            .then(function(data) {
                console.log(data);
                contenedor.style.display = "block";
                let info = "";
                for (let index = 0; index < 5; index++) {
                    info += ` <a class = "aHome" href = "./detalleSerie.html?id=${data.results[index].id}">
                                <article class = "ArtHome">
                                   <img id="imgHome" class="imgHome
                                   " src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="portada pelicula"
                                   <h3 class = "h3detallePel" id = "h3detallePel">${data.results[index].title}</h3>
                                </article>
                              </a>`
                               
            }
            recomendar.innerHTML = info;
            })

    .catch(function(error){
        console.log(error);
    })
})