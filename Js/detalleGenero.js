
let API_KEY = "8b6eae301b66732ee0ec9cb7d499ade8"
let qs       = location.search;
let qsObj    = new URLSearchParams(qs);
let idGenero = qsObj.get('id');
let nombre   = qsObj.get('name');
let endpointPelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${idGenero}`;

/* Caputando elementos del DOM */

let detallegenero = document.querySelector(".divhome");
fetch(endpointPelicula)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    
    let contenido = "";
    for (let index = 0; index < 5
         ; index++) {
        contenido += `
            <a class="aHome" href="./detallePelicula.html?id=${data.results[index].id}" > 
                <article class="ArtHome"> 
                    <img class="imgHome" src="https://image.tmdb.org/t/p/w500/${data.results[index].backdrop_path}" alt="Avatar">
                    <p class = "pTopratedDO1 ULT">${data.results[index].title}</p>
                    <p class = "pTopratedDP2 ULT">${data.results[index].release_date}</p>
                </article>
            </a>`  
    }

    detallegenero.innerHTML += contenido;

    return data; 
})
.catch(function(errors) {
    console.log(errors);
    return errors;
})