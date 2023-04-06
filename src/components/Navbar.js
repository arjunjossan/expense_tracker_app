import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
	<div>
	  <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/ ' className="navbar-brand expense">Expense Tracker App</Link>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button classNameName="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>



<div className='row'>
		<div className='col-10'></div>
		<div className='col-2'><Link to='/new' className='btn btn-primary mt-2 add-btn'>Add Expense +</Link></div>
	</div>
	</div>
  </>
  )
}

export default Navbar
