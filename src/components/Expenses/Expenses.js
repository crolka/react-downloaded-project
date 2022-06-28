import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props){
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((item, index)=>{
        return <ExpenseItem key={index}
          title={item.title}
          amount={item.amount}
          expenseDate={item.date}
        / >
      })}
    </Card>
  );
}

export default Expenses;