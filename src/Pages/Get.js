import React from "react";
import { useNavigate } from "react-router-dom";

function Get() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>This is where you can get a suggestion!</h3>
      <br>
      </br>
      {" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the home  page
      </button>
    </div>
  );
}

export default Get;
