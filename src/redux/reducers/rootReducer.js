import { combineReducers } from "redux";
import TodoListReducer from "./TodoListReducer";
import FakeBookReducer from "./FakeBookReducer";
import BaiTapGameBauCuaReducer from "./BaiTapGameBauCuaReducer";
import BaiTapThuDoReducer from "./BaiTapThuDoReducer";

export const rootReducer = combineReducers({
  TodoListReducer,
  FakeBookReducer,
  BaiTapGameBauCuaReducer,
  BaiTapThuDoReducer,
});
