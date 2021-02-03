export default function (state = {}, action) {
    switch (action.type) {
      case "LIKE_A_JOB":
        return {
          ...state,
          
           favourites: state.favorites.concat(action.payload),
    
        };
      case "UNLIKE_JOB":
        return {


        //   ...state,
        //   cart: {
        //     ...state.cart,
        //     products: [
        //       ...state.cart.products.filter(
        //         (bookId) => bookId !== action.payload
        //       ),
        //     ],
        //   },
        };
  
      case "SET_USER_NAME":
        return {
          ...state,
          user: {
            ...state.user,
            username: action.payload,
          },
        };
      default:
        return state;
    }
  }