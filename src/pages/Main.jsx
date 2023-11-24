import React from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate=useNavigate()
  return (
    <main className="main">
      <div>
        <h1 className="p-3">Welcome to my Website!</h1>
        <div className="main-buttons">
          
          <button
            className="btn btn-primary px-4 ms-4"
            onClick={() => navigate("/project")}
          >
            See Project
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
