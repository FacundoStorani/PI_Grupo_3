/* El ENDPOINT de la API */
let API_KEY = "8b6eae301b66732ee0ec9cb7d499ade8"
let movieData = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

/* Caputando elementos del DOM */

let listaPeliculas = document.querySelector("#peli");



fetch(movieData)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let contenido = "";
    for (let index = 0; index < 6
         ; index++) {
        contenido += `
            <article class="art_genero">
                <a class="a3" href="./DetalleGenero.html?id=${data.genres[index].id}" ><button class="buttona1">
                ${data.genres[index].name}</button></a>
            </article>`  
    }

    listaPeliculas.innerHTML += contenido;

    return data; 
})
.catch(function(errors) {
    console.log(errors);
    return errors;
})

/* Peliculas Populares */

let SerPopular = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`;
let listaPopulares = document.querySelector("#series");


fetch(SerPopular)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results);
    for (let index = 0; index < 6 ; index++) {
        listaPopulares.innerHTML += `
                                    <article class="art_genero">
                                        <a class="a3" href="./DetalleGenero.html?id=${data.genres[index].id}"><button class="buttona1">
                                        ${data.genres[index].name}</button></a>
                                    </article>`   
    }

    listaPopulares.innerHTML += contenido;

    return data; 
})

.catch(function(errors) {
    console.log(errors);
    return errors;
})
