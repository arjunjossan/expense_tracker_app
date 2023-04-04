import React from 'react'
import './Expense_Home.css'

function Expense_Home() {
  return (
	<div>
	  <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a href='/ ' className="navbar-brand expense">Expense Tracker App</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button classNameName="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
	</div>
  )
}

export default Expense_Home
