//import "./ExpenseDate.css";
import React from "react";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="bg-green-300 w-20 h-20 border-2 rounded-xl border-white border-solid text-center justify-center">
      <div className="text-m font-bold">{month}</div>
      <div className="text-l font-bold">{day}</div>
      <div className="text-xl font-bold">{year}</div>
    </div>
  );
}

export default ExpenseDate;
