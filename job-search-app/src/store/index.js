
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import rootReducer from "../reducers"; it is not one reducer anymore.
import favsReducer from "../reducers/favourites"
import jobsReducer from "../reducers/jobs"
import searchReducer from "../reducers/searchParams"
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    favourites:{
      favourites: []
    },
    jobs:{
    joblist:[]
    },
    searchParams:{
      position:"",
      location:""

    }
  };


const bigReducer = combineReducers({ favourites: favsReducer, joblist: jobsReducer ,position:searchReducer,location:searchReducer})
// every sub-reducer is triggered at ANY action dispatching
// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

  export default function configureStore() {
    return createStore(bigReducer, initialState, composedEnhancer(applyMiddleware(thunk)))
  }
