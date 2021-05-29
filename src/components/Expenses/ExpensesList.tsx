import React from 'react';
import ExpenseItem from 'components/Expenses/ExpenseItem';
import './ExpensesList.css';

interface Props {
  items: IExpense[];
}

const ExpensesList = ({ items }: Props) => {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>Fond no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {items.map(expense => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
