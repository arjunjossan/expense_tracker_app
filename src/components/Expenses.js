import React from 'react'
import './Expenses.css'

function Expenses(props) {
	// const[]
	const data = [{
		ExpenseTitle:'Grocery',
		ExpenseAmount:'250$',
		ExpenseDate:Date()
	},
	{
		ExpenseTitle:'Clothes',
		ExpenseAmount:'50$',
		ExpenseDate:Date()
	},
	{
		ExpenseTitle:'Traveling',
		ExpenseAmount:'2500$',
		ExpenseDate:Date()
	}
]
  return (
	<>
	{/* <button className='btn btn-primary btn-lg mt-2 add-btn'>Add Expense + </button> */}
	<div className='row'>
		<div className='col-10'></div>
		<div className='col-2'><a href='/' className='btn btn-primary mt-2 add-btn'>Add Expense + </a></div>
	</div>
	

	<div className='row mt-3 expense-row'>
	  <div className='col-3'>	  {data[0].ExpenseTitle}	  </div>
	  <div className='col-5'>	  {data[0].ExpenseDate}	  </div>
	  <div className='col-3'>	  {data[0].ExpenseAmount}	  </div>
	</div>

	<div className='row mt-3 expense-row'>
	  <div className='col-3'>	  {data[1].ExpenseTitle}	  </div>
	  <div className='col-5'>	  {data[1].ExpenseDate}	  </div>
	  <div className='col-3'>	  {data[1].ExpenseAmount}	  </div>
	</div>

	<div className='row mt-3 expense-row'>
	  <div className='col-3'>	  {data[2].ExpenseTitle}	  </div>
	  <div className='col-5'>	  {data[2].ExpenseDate}	  </div>
	  <div className='col-3'>	  {data[2].ExpenseAmount}	  </div>
	</div>

	</>
  )
}

export default Expenses
