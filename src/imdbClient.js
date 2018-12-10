export const imdbClient = (term = 'amazon') =>
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=347ded0f&s=${term}`);
