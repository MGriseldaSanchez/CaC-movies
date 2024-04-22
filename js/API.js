//API 

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    //   Authorization: 'e99484e5690c9db020b0d59b239061bf'
    }
  }

const apiKey = 'e99484e5690c9db020b0d59b239061bf';
const region = 'US'; // Puedes ajustar esto según tu región para obtener películas de estreno en tu país
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&region=${region}`;



  
  fetch(url, options)
//   https://api.themoviedb.org/3/movie/popular
//https://api.themoviedb.org/3/search/movie/recommendations?api_key=e99484e5690c9db020b0d59b239061bf
    .then(response => response.json())
    // .then(response => console.log(response))

    .then(data => {

        console.log(data)

    })

    .catch(err => console.error(err))


