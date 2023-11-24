import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({project,getData}) => {
 
const {id,name,live,title,image}=project
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
      <Card.Img className="kart" onClick={()=>navigate('/update-project',{state:{project}})} src={image}  />
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

    // <div className="card shadow-lg mb-3">
    //   <div className="row g-0">
    //     <div className="col col-md-5">

    //       <img
    //         src={image}
    //         className="w-100 h-100 rounded-start"
    //         alt={"name"}
    //         title={""}
    //       />
    //     </div>
    //     <div className="col-md-7">
    //       <div className="card-body">
    //         <h5
    //           className="card-title"
    //           role="button"
    //        onClick={()=>navigate('/update-product',{state:{project}})}
    //         >
    //         {name}
    //         </h5>
    //         <div className=" d-flex flex-wrap align-items-center">
         
    //           <span className="h5 text-dark ms-2">
    //            <a className="text-decoration-none" href={live}>Live Demo</a>
    //           </span>
    //         </div>
         
    //         <div className="product-removal mt-4">
    //           <button
    //             className="btn btn-danger btn-sm w-50 remove-product"
    //             onClick={handleRemove}
    //           >
    //             <i className="fa-solid fa-trash-can me-2"></i>Remove
    //           </button>
    //         </div>
           
           
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
