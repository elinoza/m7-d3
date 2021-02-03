export default function (state = {}, action) {
    switch (action.type) {
      case "LIKE_A_JOB":
        return {
          ...state,
          
           favourites: state.favourites.concat(action.payload),
    
        };
      case "UNLIKE_JOB":
        return {
        };
  
     
      default:
        return state;
    }
  }