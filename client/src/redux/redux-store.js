import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import pizzaCatalogReducer from "./pizza-cattalog";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { vitalPage } from "./vitaliy";

const reducer = combineReducers({
    pizzaCatalog:pizzaCatalogReducer,
    vitalPage:vitalPage,
    form:formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;