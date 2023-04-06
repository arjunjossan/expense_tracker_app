import React from 'react'
import './Expenses.css'

function Expenses(props) {
	

const newdate = new Date(props.date);
	const date = newdate.toLocaleString('default',{day:'numeric'});
	const month = newdate.toLocaleString('default',{month:'long'});
	const year = newdate.toLocaleString('default',{year:'numeric'});
  return (
	<>

	<div className='row mt-3 expense-row'>
	  <div className='col-3'>	  {props.title}	  </div>
	  <div className='col-5'>	  {date} {month} {year}	  </div>
	  <div className='col-3'>	 ${props.amount} </div>
	</div>
	</>
  )
}

export default Expenses
