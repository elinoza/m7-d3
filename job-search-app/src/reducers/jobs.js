export default function (state = {}, action) {
    switch (action.type) {
    
        case "ADD-ALL-JOBS":
        return {
            ...state,
            joblist: state.joblist.concat(action.payload),
        };
  
     
      default:
        return state;
    }
  }