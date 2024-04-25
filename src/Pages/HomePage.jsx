import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import FilmsCard from "../Components/FilmsCard";
import homeService from "../Services/homeService";
import {Carousel} from "react-responsive-carousel";


const HomePage = () =>{
  const [movies, setMovies] =useState([]);
  const [upcoming, setUpcoming] =useState([]);
  const [topRated, setTopRated] =useState([]);

  const fetchPopular = async () => {
    try {
      const response = await homeService.getPopular();
      console.log(response);
      setMovies(response.data.results)
    } catch (e) {
      console.log(e)
    }
 }

    const fetchUpcoming = async () => {
      try {
        const response = await homeService.getUpcoming();
        console.log(response);
        setUpcoming(response.data.results)
      } catch (e) {
        console.log(e)
      }
    }

    const fetchTopRated = async () => {
      try {
        const response = await homeService.getTopRated();
        console.log(response);
        setTopRated(response.data.results)
      } catch (e) {
        console.log(e);
      }
    }
  
  const displayCount = 5;

  useEffect (() => {
    fetchPopular()
    fetchUpcoming()
    fetchTopRated();
  },[]);


    return (
            <>
            <h3 className="titre_des_carousel">Les Populaires</h3>
        <Carousel showArrows={true} centerMode centerSlidePercentage={100 / displayCount} id="carousel_popular_film">
            {movies.map(m => {
            return <FilmsCard film={m} />;
            })}
        </Carousel>
      <h3 className="titre_des_carousel">A venir</h3>
      <Carousel showArrows={true} centerMode centerSlidePercentage={100 / displayCount} id="carousel_popular_film">
          {upcoming?.map(m => {
            return <FilmsCard film={m} />;
          })}
        </Carousel>
        <h3 className="titre_des_carousel">Mieux Notés</h3>
        <Carousel showArrows={true} centerMode centerSlidePercentage={100 / displayCount} id="carousel_popular_film">
          {topRated?.map(m => {
            return <FilmsCard film={m} />;
          })}
        </Carousel>


          </>
        );

}

export default HomePage;