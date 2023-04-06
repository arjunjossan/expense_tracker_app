import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'

function Form(props) {

	const navigate = useNavigate();

	const defaultvalue = {
		ExpenseTitle:'',
		ExpenseAmount:'',
		ExpenseDate:'',
	}

	const[userinput,setuserinput] = useState(defaultvalue)

	const datehandler =(event) => {
		setuserinput({...userinput,ExpenseDate:event.target.value})
	}
	const titlehandler =(event) => {
		setuserinput({...userinput,ExpenseTitle:event.target.value})
	}
	const amounthandler =(event) => {
		setuserinput({...userinput,ExpenseAmount:event.target.value})
	}

	const submithandler = (event) => {
		if (userinput.ExpenseTitle ==='') {
			alert('Title cannot be empty ');
			// return;
		}
		else if (userinput.ExpenseAmount ==='') {
			alert('Amount cannot be empty ');
			// return;
		}
		else if(userinput.ExpenseDate ==='') {
				alert('Date cannot be empty ');
				// return;
		}
		else{
			event.preventDefault();
		props.setuserexpense([...props.userexpense, userinput])
		navigate('/');
		}
		
	}

	const today = new Date().toISOString().split("T")[0];

  return (
	<>
	<div className='container cont-form'>
		<h3>Add your new expense</h3>
	<div className='form'>
	  <form>
		<div className='row'>
			<div className='col-6'><label className='form-label'>Enter the expense title</label></div>
			<div className='col-6'><input onChange={titlehandler} value={userinput.ExpenseTitle} className='form-input' type='text' placeholder='title...' required/><br/></div>
		</div>
		
		<div className='row'>
			<div className='col-6'><label className='form-label'>Enter your amount spent</label></div>
			<div className='col-6'><input onChange={amounthandler} value={userinput.ExpenseAmount} className='form-input' type='number' placeholder='amount...' required/><br/></div>
		</div>
		
		<div className='row'>
			<div className='col-6'><label className='form-label'>On which date</label></div>
			<div className='col-6'><input onChange={datehandler} value={userinput.ExpenseDate} className='form-input' max={today} type='date' placeholder='date...' required/><br/></div>
		</div>
		<input onClick={submithandler}  className='btn btn-primary' type='submit'/>
	  </form>
	</div>
	</div>
	</>
  )
}

export default Form
