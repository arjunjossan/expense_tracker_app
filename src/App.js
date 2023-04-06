import './App.css';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import Form from './components/Form';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddExpenseButton from './components/AddExpenseButton';

function App() {
  // const[]
	const data = [{
		ExpenseTitle:'Grocery',
		ExpenseAmount:'250',
		ExpenseDate:'2023-01-23'
	}]

  const[userexpense,setuserexpense] = useState(data)
  return (
    <>


<Router>
  <Navbar/>
  <AddExpenseButton/>
  <Routes>
    <Route
    element = {<Form userexpense={userexpense} setuserexpense={setuserexpense} />}
    path='/new'
    />
    <Route
    element = {
      userexpense.map(function(item){
        return <Expenses date={item.ExpenseDate} amount={item.ExpenseAmount} title={item.ExpenseTitle}/>
      })
    }
    path='/'
    />
  </Routes>
</Router>

    </>
  );
}

export default App;
