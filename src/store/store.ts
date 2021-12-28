import {combineReducers, createStore} from "redux";
import {TaskReducer} from "../reducers/TasksReducer";
import {FilterReducer} from "../reducers/FilterReducer";

let rootReducer = combineReducers({
    tasks: TaskReducer,
    filter: FilterReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)