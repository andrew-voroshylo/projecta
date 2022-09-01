import React from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>This is where you can edit a suggestion!</h3>
      <br>
      </br>
      {" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the home page
      </button>
    </div>
  );
}

export default Edit;