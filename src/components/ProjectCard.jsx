import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import foto from "../assets/project.jpg"
const ProjectCard = ({project,getData}) => {
 
const {id,name,live,title}=project
const navigate=useNavigate()





const handleRemove=async()=>{
await axios.delete(
  `https://655b152bab37729791a8849a.mockapi.io/project/${id}`
);
getData()

}

  return (
     <div>
 
 <Card className="rounded-2 m-auto player-kart 
  "  >
      <Card.Img className="player-logo" variant="top" onClick={()=>navigate('/update-project',{state:{project}})} src= {foto} />
      <Card.Body>
        <Card.Title >{name}</Card.Title>
        <Card.Text>
        {title}        
        </Card.Text>
        <a href={live} target="true">
        <Button className="m-3" variant="primary">Live Demo</Button></a>
        <Button variant="danger" onClick={handleRemove}>Remove</Button>
      </Card.Body>
    </Card></div>

    
  );
};

export default ProjectCard;
