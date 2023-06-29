import React, { useState } from "react";
import ExpenseForm from "./\bExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("자식 컴포넌트에서 받은 expenseData : ", expenseData);

    onAddExpense(expenseData);
  };

  const onEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={onEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onEditingHandler={onEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
