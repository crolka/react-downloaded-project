import Expenses from "./components/Expenses";


function App() {
  // this is our desired target state.
  const expensesList = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];

  return (
    <div>   
      <h2>Let&apos;s get started!</h2>
      <p>This is also visible</p>
      <Expenses expenses={expensesList} />
    </div>
  );
}
// jsx ("JavaScript XML") is a special react notation setup by the react team.
// the HTML code above is jsx. The npm start process that transforms the backend code.
// export the component

// jsx convention requires that components begin with a capital letter
// and all native html elements begin with a lower case letter. The
// component reference in the HTML has to match the import statement
export default App;
