import React, {createContext, useReducer} from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  setExpenses: expenses => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];

    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;

    case 'UPDATE':
      const updatableExpensesIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpenses = state[updatableExpensesIndex];
      const updatedItem = {...updatableExpenses, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpensesIndex] = updatedItem;
      return updatedExpenses;

    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);

    default:
      return state;
  }
};

const ExpensesContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const setExpenses = expenses => {
    dispatch({type: 'SET', payload: expenses});
  };

  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
