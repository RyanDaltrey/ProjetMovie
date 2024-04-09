import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FilmsCard = ({film})=> {

    // const navigate = useNavigate();

    // const redirectTo = () =>{
    //     navigate("/films/")
    // }

    return <>
    
    <div>
        <Card style={{width:"15rem"}}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w300"+film.poster_path} />
            <Card.Body>
                <Card.Title className='text-center'>{film.title}</Card.Title>
            </Card.Body>
        </Card>
        
    </div>
    </>
}

export default FilmsCard;