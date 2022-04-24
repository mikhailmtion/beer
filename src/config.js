const BASE_URL = 'https://api.punkapi.com/v2/beers';

export const allBeers = (page) => BASE_URL + `?page=${page}&per_page=20`;
export const searchById = (id) => BASE_URL + '/' + id;
export const RANDOM_BEER = BASE_URL + '/random';
