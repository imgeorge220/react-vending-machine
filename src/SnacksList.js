import React from 'react';
import { Link } from "react-router-dom";

function SnacksList({ snacks }) {

  const snackLinks = snacks.map(snack =>
    <div key={snack.path}>
      <Link exact to={`/${snack.path}`}>
        {snack.snackName}
        </Link>
      </div>
  );

    return(
      <div className="SnacksList">
        {snackLinks}
        <button>
          <Link exact to={`/newsnack`}>
            Add a Snack
          </Link>
        </button>
      </div>
    );
}

export default SnacksList;

