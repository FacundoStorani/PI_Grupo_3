let API_KEY   = "8b6eae301b66732ee0ec9cb7d499ade8";
let qs        = location.search;
let qsObj     = new URLSearchParams(qs);
let busqueda  = qsObj.get("q");
let movieData = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${busqueda}`;

/* Capturando elementos del DOM */
let listaPeliculas = document.querySelector(".divhome");
console.log(listaPeliculas);

function mostrarResultados(resultados) {
    // Limpiar resultados anteriores
    
}

function mostrarNoResultados() {
    // Mostrar mensaje de no hay resultados
}

function mostrarError(errors) {
    // Mostrar mensaje de error en la página
}

fetch(movieData)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let resultados = data.results;

        if (resultados.length > 0) {
            // Mostrar resultados
            listaPeliculas.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let pelicula = resultados[i];
        listaPeliculas.innerHTML += `
            <a class="aHome" href="./detallePelicula.html?id=${pelicula.id}" > 
                <article class="ArtHome"> 
                    <img class="imgHome" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
                </article>
            </a>`;
    }
           //  mostrarResultados(resultados);
        } else {
            // Mostrar mensaje de no hay resultados
            listaPeliculas.innerHTML = "<p>No hay resultados para su búsqueda.</p>";
        }
    })
    .catch(function (errors) {
        console.log(errors);
        // Manejar errores
    });