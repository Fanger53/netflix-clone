const APIKEY = '01a1b720a8848fa298e43618f65e4f99';
const APIBASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endPoint) => {
  const request = await fetch(`${APIBASE}${endPoint}`);
  const json = await request.json();
  return json;
}

const getHome = async () => {
  return [
    {
      slug: 'originals',
      title: 'Originals of Netflix',
      items: await basicFetch(`/discover/tv?with_network=213&api_key=${APIKEY}`)
    },
    {
      slug: 'treding',
      title: 'recommendation for you',
      items: await basicFetch(`/trending/all/week?api_key=${APIKEY}`)
    },
    {
      slug: 'toprated',
      title: 'top',
      items: await basicFetch(`/movie/top_rated?api_key=${APIKEY}`)
    },
    {
      slug: 'action',
      title: 'action',
      items: await basicFetch(`/discover/movie?with_genres=28&api_key=${APIKEY}`)
    },
    {
      slug: 'comedy',
      title: 'comedy',
      items: await basicFetch(`/discover/movie?with_genres=35&api_key=${APIKEY}`)
    },
    {
      slug: 'horror',
      title: 'horror',
      items: await basicFetch(`/discover/movie?with_genres=27&api_key=${APIKEY}`)
    },
    {
      slug: 'romance',
      title: 'romance',
      items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${APIKEY}`)
    },
    {
      slug: 'documentals',
      title: 'documentary',
      items: await basicFetch(`/discover/movie?with_genres=99&api_key=${APIKEY}`)
    },
  ]
}

export default getHome;