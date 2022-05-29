import React, {useContext} from 'react';

import ExpensesOutPut from '../components/ExpensesOutput/ExpensesOutPut';
import {ExpensesContext} from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutPut
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
