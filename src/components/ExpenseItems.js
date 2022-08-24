//import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("UPDATED!!!");
    console.log(title);
  };
  return (
    <div className="flex justify-between items-center shadow-sm p-2 my-4 mx-0 rounded-xl bg-slate-300">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="flex flex-row gap-4 items-end justify-start flex-auto">
        <h2 className="text-white font-bold text-2xl flex-auto mx-4 my-0 align-middle">
          {title}
        </h2>
        <div className="text-xl font-bold text-white bg-violet-800 border-solid border border-white py-2 px-6 rounded-xl">
          {props.amount}
        </div>
        <button
          className="text-xl font-bold text-white bg-violet-800 border-solid border border-white py-2 px-6 rounded-xl"
          onClick={clickHandler}
        >
          Change title
        </button>
      </div>
    </div>
  );
}
export default ExpenseItems;
