import React, {useContext, useEffect, useState} from 'react';

import ExpensesOutPut from '../components/ExpensesOutput/ExpensesOutPut';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {getExpenses} from '../util/http';

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsFetching(true);
      try {
        const expenses = await getExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (err) {
        setError('Could not fetch expenses');
      }
      setIsFetching(false);
    };
    fetchExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutPut
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
