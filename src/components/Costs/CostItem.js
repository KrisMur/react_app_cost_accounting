import './CostItem.css';
import CostDate from './CostDate';
import Card from './Card';
import React, { useState } from 'react';

const CostItem = (props) => {

  const [description, setDescription] = useState (props.description);

  const changrDescriptionHendler = () => {
    setDescription('New Cost')
  }

  return (
    <Card className='cost-item'>
        <CostDate date={props.date}/>
        <div className='cost-item__description'>
          <h2>{description}</h2>
          <div className='cost-item__price'>${props.amount}</div>
        </div>
        <button 
         onClick= {changrDescriptionHendler }
        >
          Змінити опис
        </button>
    </ Card>
  )
}

export default CostItem;