import { createContext, useContext, useReducer } from "react";

export const StateContext=createContext();

// Build Provider
export const StateProvider=({reducer,initialState,children})=>(
     <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
     </StateContext.Provider>
)

// This is how we use inside component
export const useStateValue = () => useContext(StateContext);
