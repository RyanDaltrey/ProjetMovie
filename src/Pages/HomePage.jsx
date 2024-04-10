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

//   var React = require('react');
//   var ReactDOM = require('react-dom');
//   var Carousel = require('react-responsive-carousel').Carousel;

//   var DemoCarousel = React.createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//               <div id="film_card">
//                 {movies.map(m =>{
//                     return <FilmsCard film={m}/>
//                 })}
//                 </div>
//             </Carousel>
//         );
//     }
// });
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
}

export default HomePage;