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

  // const onChange=() => {

  // }

  useEffect (() => {
    fetchPopular()
  },[]);


    return (
            <Carousel showArrows={true} >
              {/* <div id="film_card"> */}
                {movies.map(m =>{
                    return <FilmsCard film={m}/>
                })}
                {/* </div> */}
            </Carousel>
        );

}

export default HomePage;