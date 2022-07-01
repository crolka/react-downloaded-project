import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_DATA = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];

function App() {
  // this is our desired target state.
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    // passing the arrow function into the setExpenses method is absolutely
    //    crucial to get this handler to work!!!
    setExpenses((prevExpenses) => { 
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h2>Let&apos;s get started!!!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
// jsx ("JavaScript XML") is a special react notation setup by the react team.
// the HTML code above is jsx. The npm start process that transforms the backend code.
// export the component

// jsx convention requires that components begin with a capital letter
// and all native html elements begin with a lower case letter. The
// component reference in the HTML has to match the import statement
export default App;
