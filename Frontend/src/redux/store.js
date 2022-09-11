import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as RegisterReducer} from "./Register/reducer"
import {reducer as LoginReducer} from "./Login/reducer"
const rootReducer= combineReducers({
    RegisterReducer,
    LoginReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))