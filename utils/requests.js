const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-us`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_cast=23659&sort_by=revenue.desc`
    },
    fetchHorrorTrending: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`
    },
    fetchRomanceTrending: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_cast=500`
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878&with_cast=500&sort_by=vote_average.desc`
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv: {
        title: "TV Movie",
        url: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    }
}
// to get all list
//https://api.themoviedb.org/3/genre/movie/list?api_key=