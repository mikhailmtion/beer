const BASE_URL = 'https://api.punkapi.com/v2/';

export const allBeers = (page) => BASE_URL + `beers?page=${page}&per_page=20`;
export const searchById = (id) => BASE_URL + 'beers/' + id;
export const RANDOM_BEER = BASE_URL + 'beers/random';
