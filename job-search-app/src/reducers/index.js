export default function (state = {}, action) {
    switch (action.type) {
      case "LIKE_A_JOB":
        return {
          ...state,
          
           favourites: state.favourites.concat(action.payload),
    
        };
      case "UNLIKE_JOB":
        return {
            ...state,
            favourites: [
                ...state.favourites.filter(
                  (id) => id !== action.payload.id
                )]
        };
        case "ADD-ALL-JOBS":
        return {
            ...state,
            joblist: state.joblist.concat(action.payload),
        };
  
     
      default:
        return state;
    }
  }