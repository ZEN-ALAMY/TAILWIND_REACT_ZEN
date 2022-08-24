//import "./NewExpense.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense() {
  return (
    <div className="bg-violet-400 p-4 rounded-xl my-8 mx-auto text-center shadow-sm w-96">
      <ExpenseForm></ExpenseForm>
    </div>
  );
}

export default NewExpense;
