import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 브라우저의 로컬 스토리지
import rootReducer from "../pages/ProjectPage/Reducer/reducers"; // 루트 리듀서

// persistConfig 설정
const persistConfig = {
  key: "root",
  storage,
};

// persistReducer 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어 생성
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 퍼시스터 생성
const persistor = persistStore(store);

export { store, persistor };
