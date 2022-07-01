import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  //const items = props.expenses;
  const [filterYear, setFilterYear] = useState("2019");

  const changeExpenseFilterYearHandler = (expenseYear) => {
    setFilterYear(expenseYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          currentYear={filterYear}
          onFilterYearChange={changeExpenseFilterYearHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem key={expense.id}
            title={expense.title}
            amount={expense.amount}
            expenseDate={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
