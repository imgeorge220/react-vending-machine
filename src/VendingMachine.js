import React, {useState} from 'react';
import Snack from './Snack';
import SnacksList from './SnacksList';
import SnackForm from './SnackForm';
import { BrowserRouter, Route } from "react-router-dom";
import { v4 as uuid } from 'uuid';

function VendingMachine() {
  const [snacks, setSnacks] = useState([
    {snackName: "Hot Cheetos", path:"cheetos"},
    {snackName: "Sardines", path:"sardines"},
    {snackName: "Breakfast Tacos", path:"tacos"},
  ]);

  const snackRoutes = snacks.map(snack => (
    <Route key={snack.path} path={`/${snack.path}`}>
      <Snack snackName={snack.snackName} />
    </Route>
  ));

  const addSnack = snack => {
    snack.path = snack.snackName.split(" ").join("");
    let newSnack = { ...snack, id: uuid() };
    setSnacks(snacks => [...snacks, newSnack])
  };

  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Route exact path="/">
          <SnacksList snacks={snacks}/>
        </Route>
        {snackRoutes}
        <Route exact path="/newsnack">
          <SnackForm addSnack={addSnack}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;