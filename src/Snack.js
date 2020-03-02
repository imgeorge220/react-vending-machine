import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";


function Snack({ snackName, snackImage }) {
  return (
    <div className="Snack">
      <p>{snackName}</p>
      <Link exact to="/">
        Back to Vending Machine
      </Link>
    </div>
  );
}

export default Snack;