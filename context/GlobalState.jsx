import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  teams: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addTeam(team) {
    dispatch({
      type: "ADD_TEAM",
      payload: team
    });
  }

  function removeTeam(id) {
    dispatch({
      type: "REMOVE_TEAM",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        teams: state.teams,
        addTeam,
        removeTeam
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};