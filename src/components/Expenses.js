import ExpenseItems from "./ExpenseItems";
//import "./Expenses.css";
import React from "react";
function Expenses(props) {
  return (
    <div className="p-4 bg-red-400 my-8 mx-auto rounded-xl shadow-sm">
      <ExpenseItems
        amount={props.items[0].amount}
        title={props.items[0].title}
        date={props.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        amount={props.items[1].amount}
        title={props.items[1].title}
        date={props.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        amount={props.items[2].amount}
        title={props.items[2].title}
        date={props.items[2].date}
      ></ExpenseItems>
    </div>
  );
}

export default Expenses;
