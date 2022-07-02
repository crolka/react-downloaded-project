import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log('In NewExpense, this is the data: ');
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const showFormDisplayHandler = () => {
    setShowForm(true);
  };

  const formDisplayHandler = (showForm) => {
    setShowForm(showForm);
  }

  let componentOutput = (
    <button type="button" onClick={showFormDisplayHandler}>
      Add New Expense
    </button>
  );

  if(showForm){
    componentOutput = <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onFormCancel={formDisplayHandler}
      />;
  }
  return (
    <div className="new-expense">
      {componentOutput}
    </div>
  );
};

export default NewExpense;
