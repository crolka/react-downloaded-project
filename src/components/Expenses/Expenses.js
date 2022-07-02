import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

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
    filteredItems = filteredExpensesByYear(expenseYear, filteredItems);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          currentYear={filterYear}
          onFilterYearChange={changeExpenseFilterYearHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList theFilteredItems={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
