/* El ENDPOINT de la API */
let API_KEY = "8b6eae301b66732ee0ec9cb7d499ade8"
let movieData = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

/* Caputando elementos del DOM */

let listaPeliculas = document.querySelector(".divhome");
console.log(listaPeliculas);

fetch(movieData)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    for (let index = 0; index < array.length; index++) {
        console

        
    }

    console.log(data.results); /*una array*/
    return data; 
})
.catch(function(errors) {
    console.log(errors);
    return errors;
})