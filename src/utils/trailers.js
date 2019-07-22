const movieTrailer = require('movie-trailer');

movieTrailer('Crash').then(console.log)

movieTrailer('Oceans Eleven', 1960)
  .then( response => console.log( response ) )

  movieTrailer('Oceans Eleven', true)
  .then( response => console.log( response ) )


