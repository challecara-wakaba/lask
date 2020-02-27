import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // この中に src/redux/modules に用意したmoduleを書く
});

export const setupStore = () => {
  // getDefaultMiddleware には
  // redux-immutable-state-invariant と
  // serializable-state-invariant-middleware と
  // redux-thunk が含まれる
  const middlewares = [...getDefaultMiddleware()];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
  });

  return store;
};
