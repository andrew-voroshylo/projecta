import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
    
    const [goToEdit, setGoToEdit] = React.useState(false);
    const [goToGive, setGoToGive] = React.useState(false);
    const [goToGet, setGoToGet] = React.useState(false);
    if (goToGive) {
        return <Navigate to="/Give" />;
      }
    if (goToGet) {
        return <Navigate to="/Get" />;
      }
    if (goToEdit) {
        return <Navigate to="/Edit" />;
      }
  return (
    <div>
          <h3><center>Would you like to Get a Suggestion</center></h3>
          <button
        onClick={() => {
            setGoToGet(true);
        }}
      >
        {" "}
        Go to the Get page
      </button>
    <h3><center>Would you like to Give a Suggestion</center></h3>
    <button
        onClick={() => {
            setGoToGive(true);
        }}
      >
        {" "}
        Go to the Give page
      </button>
    <h3><center>Would you like to Edit a Suggestion</center></h3>
    <button
        onClick={() => {
            setGoToEdit(true);
        }}
      >
        {" "}
        Go to the Edit page
      </button>
    </div>
  );
}

export default Home;
