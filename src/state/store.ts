import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";

// Создаем роутовый Редусер, в которорый с помощью комбаина создаем объект всех редусеров.
const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

// Создаем стор
export const store = createStore(rootReducer)

// Автоматическая типизация редусера
export type AppRootState = ReturnType<typeof rootReducer>


// Создаем глобальный объект стор
// @ts-ignore
window.store = store