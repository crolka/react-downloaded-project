import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function filteredExpensesByYear(filterYear, items){
  return items.filter(
    (item) => item.date.getFullYear() === parseInt(filterYear)
  );
}

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");
  let filteredItems = filteredExpensesByYear(filterYear, props.items);
  
  const changeExpenseFilterYearHandler = (expenseYear) => {
    setFilterYear(expenseYear);
    filteredItems=filteredExpensesByYear(expenseYear, filteredItems);
  };

  let expensesContent = <p className="">No Expenses Found.</p>;

  if(filteredItems.length > 0) {
    expensesContent = filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        expenseDate={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          currentYear={filterYear}
          onFilterYearChange={changeExpenseFilterYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
