import React, { useState } from "react";
import ProjectForm from "../components/ProjectForm";

import axios from "axios"
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate=useNavigate()
  const initialValue = {
    name:"",
    live:"",
    image:"",
  };
  const [formVeri, setFormVeri] = useState(initialValue);
  // initialStatei apinin benden istediği değerlere göre oluşturdum ki herhangi bir ek düzenleme yapmadan veriyi olduğu gibi apiye gönderebileyim.

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://655b152bab37729791a8849a.mockapi.io/project",
      formVeri
     
    );
 navigate(-1);
    setFormVeri(initialValue);
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-5 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Project</h1>

        <ProjectForm
          handleSubmit={handleSubmit}
          formVeri={formVeri}
          setFormVeri={setFormVeri}
        />
      </article>
    </div>
  );
};

export default NewProject;
