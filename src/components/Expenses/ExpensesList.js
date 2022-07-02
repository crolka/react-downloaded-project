import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  
  const filteredItems = props.theFilteredItems;
  if(filteredItems.length === 0){
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  }
  
  return <ul className="expenses-list">
    {filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        expenseDate={expense.date}
      />
    ))}
  </ul>
}

export default ExpensesList;