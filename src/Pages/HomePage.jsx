import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import FilmsCard from "../Components/FilmsCard";
import homeService from "../Services/homeService";


const HomePage = () =>{
  const [movies, setMovies] =useState([]);

  const fetchPopular = async () => {
    try {
      const response = await homeService.getPopular();
      console.log(response);
      setMovies(response.data.results)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect (() => {
    fetchPopular()
  },[]);


    return<>
    <div id="film_card">
  {movies.map(m =>{
    return <FilmsCard film={m}/>
  })}
  </div>
    </>
}

export default HomePage;