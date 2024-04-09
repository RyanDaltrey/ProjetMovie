import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import FilmsCard from "../Components/FilmsCard";
import homeService from "../Services/homeService";

const FilmsPage = () =>{
    const [films, setFilms] = useState([]);
    
    

    const fetchFilms = async ()=>{
        try{
            const response = await homeService.getMovies();
            console.log(response);
            setFilms(response.data.results)
        } catch(e) {
            console.log(e)
        }

}

useEffect(() => {
    fetchFilms();
}, [])

    return<>
    <div id="film_card">
  {films.map(m =>{
    return <FilmsCard film={m}/>
  })}
  </div>
    </>
}

export default FilmsPage;