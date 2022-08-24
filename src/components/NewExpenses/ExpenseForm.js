//import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-center">
        <div>
          <label className="font-bold mb-2 block">Title</label>
          <input
            className="p-2 rounded-md border border-solid border-gray-200 w-80 max-w-full"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Amount</label>
          <input
            className="p-2 rounded-md border border-solid border-gray-200 w-80 max-w-full"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Date</label>
          <input
            className="p-2 rounded-md border border-solid border-gray-200 w-80 max-w-full"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="border-solid rounded-xl border-violet-800 border mr-4 py-4 px-8 bg-violet-800 text-white cursor-pointer"
        >
          ADD EXPENSE
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
