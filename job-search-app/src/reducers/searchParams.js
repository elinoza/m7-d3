export default function (state = {}, action) {
    switch (action.type) {
    
        case "SET_LOCATION":
        return {
            ...state,
            searchParams:{
             ...state,
            location:action.payload
            }

        };
        case "SET_POSITION":
            return {
                ...state,
                searchParams:{
                 ...state,
                position:action.payload
                }
    
            };
  
     
      default:
        return state;
    }
  }