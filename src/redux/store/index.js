import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "../reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
