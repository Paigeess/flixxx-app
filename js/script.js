const global = {
  currentPage: window.location.pathname,
};

async function displayPopularMovies() {
  const results = await fetchAPIData('movie/popular');
  console.log(results);
}

// FETCH DATA FROM TMDB API

async function fetchAPIData(endppoint) {
  const API_KEY = '1fba9b01cd3613a05c746fb2ad0e11d4';
  const API_URL = 'https://api.themoviedb.org/3';

  const response = await fetch(`/${API_URL}${endppoint}?api_key=${API_KEY}&language=en-US`);

  const data = await response.json();

  return data;
}

// HIGHLIGHT ACTIVE LINK
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// INIT APP
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('TV Details');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
