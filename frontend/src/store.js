import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productListTopThreeReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import { authorizeUserReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  productList: productListReducer,
  productListTopThree: productListTopThreeReducer,
  productDetails: productDetailsReducer,
  authorizeUser: authorizeUserReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  authorizeUser: { user: userInfoFromStorage },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
