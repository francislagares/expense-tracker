import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface Props {
  onAddExpense: (arg: IExpense) => void;
}

const NewExpense = ({ onAddExpense }: Props) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
