import React, { useState } from 'react';
import { Link } from "react-router-dom";

function VendingMachine({ addSnack }) {

  const INITIAL_STATE = { snackName: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addSnack(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="snack-name">Name: </label>
      <input
        id="snack-name"
        name="snackName"
        value={formData.snackName}
        onChange={handleChange}
      />
        <button to="/">Add Snack</button>
    </form>
      <Link exact to="/">
        Back to Vending Machine
      </Link>
    </div>
  );
}

export default VendingMachine;