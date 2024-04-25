//API the movieDB
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTk0ODRlNTY5MGM5ZGIwMjBiMGQ1OWIyMzkwNjFiZiIsInN1YiI6IjY2MjU4NTZjNjNlNmZiMDE2NWZiYzlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MlBIoferekcyTO8Oeb0Oyvuso3Os2anfe8tp7sTyb0s'
    }
  }
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

  
// traer contenedor de las peliculas 
const films = document.getElementById("content-films")

// funcion crea etiqueta
const createTag = (tag) => {
    const element = document.createElement(tag)
    return element
    //! MODIFICAR
}















  fetch(url, options)
    .then(response => response.json())
   

    .then(data => {

      //   console.log(data.results[0].poster_path)

      // data.results.forEach(poster => {

      //   const movieDiv = document.createElement('div')
      //   const img = document.createElement('img')
      //   img.src = poster_path

      //   movieDiv.appendChild(img)
      //   moviesContainer.appendChild(movieDiv)

      console.log(data)
        
      })



    .catch(err => console.error(err))


