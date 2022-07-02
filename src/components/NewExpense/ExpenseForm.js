import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // This is a very common way to handle the state of the form.
  //    It is preferred by many because it is simple and straight
  //    forward.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (eventObject) => {
    setEnteredTitle(eventObject.target.value);
  };
  const dateChangeHandler = (eventObject) => {
    setEnteredDate(eventObject.target.value);
  };
  const amountChangeHandler = (eventObject) => {
    setEnteredAmount(eventObject.target.value);
  };

  // This next example, bundles the individual items into an object
  //    and uses that object to maintain the state of the form controls.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredAmount: event.target.value };
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredDate: event.target.value };
  //   });
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    props.onFormCancel(false);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  const cancelClickHandle = () => {
    props.onFormCancel(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelClickHandle}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
