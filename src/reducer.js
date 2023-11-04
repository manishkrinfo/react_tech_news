const reducer = (state, action) => {
   switch(action.type) {
      case "GET_STORIES":
         return {
            ...state,
            hits : action.payload.hits,
            nbPages : action.payload.nbPages,
            isLoading : false,
         }
      case "GET_Loading" : 
         return {
            ...state,
            isLoading : true,
         }
   }

   return state;
}

export default reducer;