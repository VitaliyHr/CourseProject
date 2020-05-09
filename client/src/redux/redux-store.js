import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import pizzaCatalogReducer from "./pizza-cattalog";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducer = combineReducers({
    pizzaCatalog:pizzaCatalogReducer,
    form:formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;