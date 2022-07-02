import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import "./ExpenseItem.css";

// component code is just a JavaScript function that returns JSX code.
// component code is just HTML code that gets rendered in the final render
// The style sheet should accompany the component.

// This code is all JSX syntax which is all JavaScript under the hood.

// THe ExpenseDate component is a sub component to which we pass
// the expenseDate property along.
function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;