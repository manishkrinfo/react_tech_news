import React, { useContext, useReducer, useState, useEffect } from 'react';
import reducer from './reducer';

let API = 'https://hn.algolia.com/api/v1/search?';
const initialState = {
   isLoading: true,
   query : "HTML",
   nbPages: 0,
   page: 0,
   hits: [],
}

const AppContext = React.createContext();

// to create a provide function
const AppProvider = ({children}) => {

   //const [state, setState] = useState(initialState);
   const [state, dispatch] = useReducer(reducer, initialState);

   const fetchApiData = async (url) => {

      dispatch({
         type: "SET_Loading",
         
      })
      try {
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
         dispatch({
            type:"GET_STORIES",
            payload: {
               hits: data.hits,
               nbPages : data.nbPages,
            }
         });
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      fetchApiData(`${API}query=${state.query}&page=${state.page}`);
   }, []);

   return (
      <AppContext.Provider value={{...state}}>
         {children}
      </AppContext.Provider>
   )
}

// create custom hooks
const useGlobalContext = () => {
   return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};