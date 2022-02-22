import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import dogReducer from "./redux/reducers/dogReducer";
import { watcherSaga } from "./redux/saga/sagas";

const middleware = createSagaMiddleware();
const store = createStore(dogReducer, applyMiddleware(middleware));

middleware.run(watcherSaga);

export default store;