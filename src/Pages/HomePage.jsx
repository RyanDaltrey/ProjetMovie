import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import FilmsCard from "../Components/FilmsCard";
import homeService from "../Services/homeService";


const HomePage = () =>{
  const [movies, setMovies] =useState([]);

  const fetchMovies = async () => {
    try {
      const response = await homeService.getMovies();
      console.log(response);
      setMovies(response.data.results)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect (() => {
    fetchMovies()
  },[]);


    return<>
    
  {movies.map(m =>{
    return <FilmsCard film={m}/>
  })}
    </>
}

export default HomePage;