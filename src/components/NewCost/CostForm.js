import './CostForm.css'

const CostForm = () => {
  return <div>
      <form>
       <div className='new-cost__controls'>
       </div>

       <div className='new-cost__control'>
          <label>Назва</label>
          <input type= 'text'/>
       </div>

       <div className='new-cost__control'>
          <label>Сума</label>
          <input type= 'number' min = '0.01' step ='0.01'/>
       </div>

       <div className='new-cost__control'>
          <label>Дата</label>
          <input type= 'date' min = '2019-01-01' step ='2022-12-31'/>
       </div>

       <div className='new-cost__actions'>
          <button type = 'submit'>Додати розхід</button>
       </div>
      </form>
  </div>


}

export default CostForm;
