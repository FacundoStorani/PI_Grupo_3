/* El ENDPOINT de la API */
let API_KEY   = "8b6eae301b66732ee0ec9cb7d499ade8"
let movieData = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

/* Caputando elementos del DOM */
/*peliculas Mas valoradas*/

let listaPeliculas = document.querySelector(".divhomePeliculasValo");

console.log(listaPeliculas);

fetch(movieData)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results);
    let contenido  = "";
    for (let index = 0; index < 5 ; index++) {
        contenido += `
                                    <a class="aHome" href="./detallePelicula.html?id=${data.results[index].id}" > 
                                        <article class="ArtHome"> 
                                           <img class="imgHome" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}"Breaking Bad">   
                                           <p class = "pToprated">${data.results[index].title}</p>
                                           <p class = "pToprated">${data.results[index].release_date}</p>
                                        </article>
                                    </a>`   
    }

    listaPeliculas.innerHTML = contenido;

    return data; 
})
.catch(function(errors) {
    console.log(errors);
    return errors;
})


/* Las 5 series mas populares */

let serieTV      = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
let listaSerieTV = document.querySelector(".divhomeSeries");
console.log(listaSerieTV);

fetch(serieTV)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results);
    for (let index = 0; index < 5 ; index++) {
        listaSerieTV.innerHTML += `
                                   <a class="aHome" href="./detalleSerie.html" >
                                       <article class="ArtHome"> 
                                           <img class="imgHome" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="Casino">
                                           <p class = "pToprated">${data.results[index].original_name}</p> 
                                           <p class = "pToprated">${data.results[index].first_air_date}</p>
                                       </article>
                                   </a>`   
    }

    return data; 
})
.catch(function(errors) {
    console.log(errors);
    return errors;
})
/* Para ver en familia */

let peliculaPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
let listaPopulares  = document.querySelector(".divhomePel");
console.log(listaPopulares);

fetch(peliculaPopular)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results);
    for (let index = 0; index < 5 ; index++) {
        listaPopulares.innerHTML += `
                                      <a class="aHome" href="./detallePelicula.html?id=${data.results[index].id}"> 
                                         <article class="ArtHome"> 
                                           <img class="imgHome" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="Spiderman">  
                                           <p class = "pToprated">${data.results[index].title}</p> 
                                           <p class = "pToprated fechas">${data.results[index].release_date}</p>
                                         </article>
                                      </a>`   
    }

    return data; 
})
.catch(function(errors) {
    console.log(errors);
    return errors;
})