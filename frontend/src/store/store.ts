import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
  type Store,
} from "redux";
import { chatReducer } from "./reducer/chat.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    gStore: Store;
  }
}

const rootReducer = combineReducers({
  chatModule: chatReducer,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

window.gStore = store;