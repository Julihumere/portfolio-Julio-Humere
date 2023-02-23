import { compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";


const composeEnhancers = compose;

const store = configureStore({
  reducer: reducer,
  applyMiddleware: thunk,
  composeEnhancers,
});

export default store;
