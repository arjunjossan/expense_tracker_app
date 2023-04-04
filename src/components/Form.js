import React from 'react'
import './Form.css'

function Form() {
  return (
	<>
	<div className='container cont-form'>
		<h3>Add your new expense</h3>
	<div className='form'>
	  <form>
		<div className='row'>
			<div className='col-6'><label className='form-label'>Enter the expense title</label></div>
			<div className='col-6'><input className='form-input' type='text' placeholder='title...' /><br/></div>
		</div>
		
		<div className='row'>
			<div className='col-6'><label className='form-label'>Enter your amount spent</label></div>
			<div className='col-6'><input className='form-input' type='number' placeholder='amount...' /><br/></div>
		</div>
		
		<div className='row'>
			<div className='col-6'><label className='form-label'>On which date</label></div>
			<div className='col-6'><input className='form-input' type='date' placeholder='date...' /><br/></div>
		</div>
		<input className='btn btn-primary' type='submit'/>
	  </form>
	</div>
	</div>
	</>
  )
}

export default Form
