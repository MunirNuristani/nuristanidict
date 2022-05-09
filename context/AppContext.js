import { createContext, useContext, useReducer, } from 'react';
import { AppReducer, initialState } from './Reducer';
 
 const ReducerContext = createContext(  );

export function ReducerWrapper({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState)
        
    return (
        <ReducerContext.Provider value={{state, dispatch}}>
                {children}
        </ReducerContext.Provider>
    )
}
export function useAppContext() {
    return useContext(ReducerContext)
}