//API the movieDB

//URL de API de The Movie DB
const API_SERVER = 'https://api.themoviedb.org/3' 

// Objeto con las opciones para el fetch
const options = {
    method: 'GET', 
    headers: {
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTk0ODRlNTY5MGM5ZGIwMjBiMGQ1OWIyMzkwNjFiZiIsInN1YiI6IjY2MjU4NTZjNjNlNmZiMDE2NWZiYzlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MlBIoferekcyTO8Oeb0Oyvuso3Os2anfe8tp7sTyb0s' // key de acceso
        
    }
}

// crear elemento html
const createElement = (tag, className, attributes = {}) => {
    // nuevo elemento HTML
    const element = document.createElement(tag)
    
    // si se especificó una clase
    if (className) {
        element.classList.add(className)
    }
    // atributos se añaden al elemento
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
    return element
}

// cargar películas en contenedor
const fetchMoviesGrid = async (page = 1) => {
    // fetch películas populares
    const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options)
    
    // Conversion a JSON
    const data = await response.json()
    
    // peliculas extraidas
    const movies = data.results

    // contenedor 
    const tendenciasContainer = document.querySelector('.peliculasTendencia .peliculas');
    
    // clear contenido previo 
    tendenciasContainer.innerHTML = ''

    // recorrido sobre cada película
    movies.forEach(movie => {
        // se crea los elementos HTML para mostrar la película
        const pelicula = createElement('div', 'pelicula')
        const anchor = createElement('a', '')
        anchor.href = './pages/detalle.html'
        const img = createElement('img', 'imgTendencia', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        const tituloPelicula = createElement('div', 'tituloPelicula')
        const titulo = createElement('h4', '')
        titulo.textContent = movie.title
        
        // Creamos un contenedor para la película dentro del enlace
        tituloPelicula.appendChild(titulo); // título
        pelicula.append(img, tituloPelicula); // imagen y contenedor de título a la película
        anchor.appendChild(pelicula); // película al enlace
        const peliculaWrapper = createElement('div', 'peliculas') // contenedor adicional para la película
        peliculaWrapper.appendChild(anchor); // se agrega el enlace con la película al contenedor adicional
        tendenciasContainer.appendChild(peliculaWrapper); // se agrega el contenedor adicional al contenedor de tendencias
    });

    // Actualizar número de página actual
    tendenciasContainer.parentElement.setAttribute('data-page', page)
}

// películas en el carrusel de películas aclamadas
const fetchMoviesFlex = async () => {
    // las películas más aclamadas
    const response = await fetch(`${API_SERVER}/movie/top_rated`, options)
    
   
    const data = await response.json()
    
   
    const movies = data.results

    
    const aclamadasContainer = document.querySelector('.aclamadas')
    
    
    movies.forEach(movie => {
        // Creamos los elementos HTML para mostrar la película
        const peliculaItem = createElement('div', 'peliculaItem')
        const img = createElement('img', 'imgAclamada', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        
        // add elementos 
        peliculaItem.appendChild(img) 
        aclamadasContainer.appendChild(peliculaItem) 
    })
}

// Evento botón "Anterior"
document.querySelector('.anterior').addEventListener('click', () => {
    // Obtener el número de página actual
    let currentPage = Number(document.querySelector('.peliculasTendencia').getAttribute('data-page'))
    // Si es la primera página
    if (currentPage <= 1) return
    //  películas de la página anterior
    fetchMoviesGrid(currentPage - 1)
})

// evento para el botón "Siguiente"
document.querySelector('.siguiente').addEventListener('click', () => {
    
    let currentPage = Number(document.querySelector('.peliculasTendencia').getAttribute('data-page'))
    
    fetchMoviesGrid(currentPage + 1)
})

// invocacion de funciones principales al cargar la página
document.addEventListener('DOMContentLoaded', () => {
   
    fetchMoviesGrid()
   
    fetchMoviesFlex()
})
