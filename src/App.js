import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
    { 
    date: new Date (2022, 3+1 , 29),
    description: 'Холодильник',
    amount : 900,
    },

    { 
      date: new Date (2020, 8, 29),
      description: 'GR',
      amount : 8000.78,
    },

    { 
      date: new Date (2021, 7, 29),
      description: 'Джинси',
      amount : 400,
    },

  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
