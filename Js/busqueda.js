/* El ENDPOINT de la API */
let movieData = 'https://api.themoviedb.org/3/movie/76341?api_key=8b6eae301b66732ee0ec9cb7d499ade8';

/* Caputando elementos del DOM */

let listaPeliculas = document.querySelector(".divhome");
console.log(listaPeliculas);

fetch(movieData)

.then(function(response) {
    return response.json();
})
.then(function(data) {

    console.log(data.provincias); /una array/
    let array = data.provincias;

    for (let i = 0; i < array.length; i++) {
       console.log(array[i].nombre);
       let element = array[i]
       listaProvincias.innerHTML+= ` <a class="aHome" href="./detallePelicula.html" > ${element.nombre} <article class="ArtHome"> 
                                            <img class="imgHome" src="./Img/Spider-man.webp" alt="Spiderman">   
                                            </article></a>`
    }
    return data; 
})
.catch(function(errors) {
    console.log(errors);
    return errors;
})