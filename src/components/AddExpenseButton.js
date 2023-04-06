import React from 'react'
import {Link} from 'react-router-dom'

function AddExpenseButton() {
  return (
	<div>
	  <div className='row'>
		<div className='col-10'></div>
		<div className='col-2'><Link to='/new' className='btn btn-primary mt-2'>Add Expense +</Link></div>
	</div>
	</div>
  )
}

export default AddExpenseButton
