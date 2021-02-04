export default function (state = {}, action) {
    switch (action.type) {
    
        case "ADD-ALL-JOBS":
        return {
            ...state,
            joblist: action.payload
        };
  
     
      default:
        return state;
    }
  }