import axios from "axios";


    function getMovies(){
        return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c207b8263dc0416b89b182103fa3675e")
    }

    function getPopular(){
        return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c207b8263dc0416b89b182103fa3675e")
    }

    function getLatest(){
        return axios.get("")
    }

export default {
                getMovies, 
                getPopular};