import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import "./Expenses.css";

function Expenses(props){
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState('2019');

  const changeExpenseFilterYearHandler = (expenseYear) => { 
    setFilterYear(expenseYear);

    console.log(expenseYear);
  };

  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter currentYear={filterYear} onFilterYearChange={changeExpenseFilterYearHandler} />
        {expenses.map((item, index)=>{
          return <ExpenseItem key={index}
            title={item.title}
            amount={item.amount}
            expenseDate={item.date}
          / >
          })
        }
      </Card>
    </div>
  );
}

export default Expenses;