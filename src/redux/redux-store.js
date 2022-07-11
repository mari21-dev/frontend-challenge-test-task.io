import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { catsReducer } from "./cats-reducer";
import { likedCatsReducer } from "./likeCats-reducer";
import thunk from "redux-thunk";

export const rootReducers = combineReducers({
  cats: catsReducer,
  likedCats: likedCatsReducer,
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));