import { createStore } from "redux";
import rootReducer from "../reducers";

const initialState = {
    favourites: [],
};

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}