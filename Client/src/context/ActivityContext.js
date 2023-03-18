import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  date: undefined,
  category: undefined,
  options: {
    time: undefined,
    language: undefined,
    price: undefined,
  },
};

export const ActivityContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const ActivityContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <ActivityContext.Provider
      value={{
        city: state.city,
        date: state.date,
        category: state.category,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};



















