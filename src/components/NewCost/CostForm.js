import React, { useState } from 'react';
import './CostForm.css'

const CostForm = (props) => {

  const [inputName, setInputName] = useState('');
  const [inputAmmount, setInputAmmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   ammount: '',
  //   date: ''
  // })


  const nameChangeHandler = (event) => {
    setInputName(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   name : event.target.value,
    // });
  //   setUserInput((previousState)=> {
  //     return {
  //       ...previousState,
  //       name: event.target.value
  //     }
  //   })
   };

  const ammountChangeHandler = (event) => {
    setInputAmmount(event.target.value)
    // setUserInput( {
    //   ...userInput,
    //   ammount : event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
    // setUserInput( {
    //   ...userInput,
    //   date : event.target.value,
    // });
  };

const submitHendler = (event) => {
  event.preventDefault();

  const costData = {
    description: inputName,
    amount: inputAmmount,
    date: new Date(inputDate)
  };

  props.onSaveCostData(costData);
  setInputName('');
  setInputAmmount('');
  setInputDate('');
};

  return <div>
      <form onSubmit={submitHendler}>
       <div className='new-cost__controls'>
       </div>

       <div className='new-cost__control'>
          <label>Назва</label>
          <input type= 'text' value = {inputName} onChange={nameChangeHandler}/>
       </div>

       <div className='new-cost__control'>
          <label>Сума</label>
          <input value={inputAmmount} type= 'number' min = '0.01' step ='0.01' onChange={ammountChangeHandler}/>
       </div>

       <div className='new-cost__control'>
          <label>Дата</label>
          <input value={inputDate} type= 'date' min = '2019-01-01' step ='2022-12-31' onChange={dateChangeHandler}/>
       </div>

       <div className='new-cost__actions'>
          <button type = 'submit'>Додати витрату</button>
          <button type='button' onClick={props.onCancel}>Відмінити</button>
       </div>
      </form>
  </div>


}

export default CostForm;
