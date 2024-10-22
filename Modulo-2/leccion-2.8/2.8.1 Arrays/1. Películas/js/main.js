'use strict';

const movies = ['ToyStory', 'Matrix', 'The Hunger Games'];

const workWithMovies = () => {
  movies[3] = 'Brave';

  console.log(movies);
  
  movies[1] = 'Rompe Ralph';
  
  console.log(movies);
}

workWithMovies();