import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props){
  const expenses = props.expenses;
  return (
    <div className="expenses">
      {expenses.map((item, index)=>{
        return <ExpenseItem key={index}
          title={item.title}
          amount={item.amount}
          expenseDate={item.date}
        / >
      })}
    </div>
  );
}

export default Expenses;