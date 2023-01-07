import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
    eventDeleteReducer,
    eventListReducer,
    eventUpdateReducer,
    eventCreateReducer,
} from "./reducers/events";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/user";

const reducer = combineReducers({
  eventList: eventListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  eventCreate: eventCreateReducer,
  eventDelete: eventDeleteReducer,
  eventUpdate: eventUpdateReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;