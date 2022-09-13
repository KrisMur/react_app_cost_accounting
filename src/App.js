import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  { 
  id: 'c1',
  date: new Date (2022, 4 , 29),
  description: 'PC',
  amount : 900,
  },

  { 
    id: 'c2',
    date: new Date (2022, 8, 29),
    description: 'Flowers',
    amount : 500,
  },

  { 
    id: 'c3',
    date: new Date (2022, 7, 29),
    description: 'dress',
    amount : 400,
  },

];

const App = () => {

  const[costs, setCosts] = useState (INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
