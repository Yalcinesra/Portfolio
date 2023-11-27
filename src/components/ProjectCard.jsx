
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import foto from "../assets/project.jpg"
const ProjectCard = ({project,getData}) => {
 
const {name,live,title}=project
const navigate=useNavigate()







  return (
     <div>
 
 <Card className="rounded-2 m-auto player-kart mt-4 text-center
  "  >
      <Card.Img className="player-logo" variant="top" onClick={()=>navigate('/update-project',{state:{project}})} src= {foto} />
      <Card.Body>
        <Card.Title >{name.toUpperCase()}</Card.Title>
        <Card.Text>
        {title.toUpperCase()}        
        </Card.Text>
        <a href={live} target="true">
        <Button className="m-3" variant="primary">Live Demo</Button></a>
       
      </Card.Body>
    </Card></div>

    
  );
};

export default ProjectCard;
