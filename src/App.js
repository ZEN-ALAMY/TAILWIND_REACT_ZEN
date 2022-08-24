import Expenses from "./components/Expenses";
import React from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
  const expenses = [
    { date: new Date(2021, 28, 2), amount: 1234.54, title: "car insurance" },
    { date: new Date(2021, 28, 10), amount: 134.54, title: "bike insurance" },
    { date: new Date(2021, 28, 5), amount: 12224.54, title: "bus insurance" },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
