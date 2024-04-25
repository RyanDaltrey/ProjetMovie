import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import FilmsCard from "../Components/FilmsCard";
import homeService from "../Services/homeService";
import {Carousel} from "react-responsive-carousel";


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

  const displayCount = 5;

  useEffect (() => {
    fetchPopular()
  },[]);


    return (
            <>
            <h3 className="titre_des_carousel">Les Populaires</h3>
        <Carousel showArrows={true} centerMode centerSlidePercentage={100 / displayCount} id="carousel_popular_film">
            {movies.map(m => {
            return <FilmsCard film={m} />;
            })}
        </Carousel>
      <h3 className="titre_des_carousel">Les Nouveautés</h3>
      <Carousel showArrows={true} centerMode centerSlidePercentage={100 / displayCount} id="carousel_popular_film">
          {/* <div id="film_card"> */}
          {movies.map(m => {
            return <FilmsCard film={m} />;
          })}
          {/* </div> */}
        </Carousel>
        <h3 className="titre_des_carousel">Mieux Notés</h3>
        <Carousel showArrows={true} centerMode centerSlidePercentage={100 / displayCount} id="carousel_popular_film">
          {/* <div id="film_card"> */}
          {movies.map(m => {
            return <FilmsCard film={m} />;
          })}
          {/* </div> */}
        </Carousel>


          </>
        );

}

export default HomePage;