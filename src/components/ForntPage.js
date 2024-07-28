import React from "react";
import "./ForntPage.css"
import { useNavigate } from "react-router-dom";


function ForntPage() {

  const navigate = useNavigate();
  return (
    <div>
      <section>
        <div id="btnContainer" className="btnContainer">
        <button className="btnElement">
            <span href="#">Admin</span> 
        </button>
        <button className="btnElement" onClick={() => navigate("/signin")}>
            <span >Employee</span>
        </button>
        </div>
  
      </section>
    </div>
  );
}

export default ForntPage;