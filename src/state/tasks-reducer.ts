import {TasksStateType} from "../App";
import {v1} from "uuid";
import {addTodoListACType} from "./todolists-reducer";


export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASKS": {
          return   {...state,
          [action.payload.todoListId]:state[action.payload.todoListId].filter(f=> f.id !== action.payload.id)}
        }
        case "ADD_TASKS": {
            return {...state,
            [action.payload.todolistId]:[{id: v1(), title: action.payload.title, isDone: false}, ...state[action.payload.todolistId] ]
            }
        }
        case "CHANGE_STATUS": {
            return {...state,
                [action.payload.todolistId]:state[action.payload.todolistId].map(m=> m.id === action.payload.id ? {...m, isDone: action.payload.isDone } : m)
            }
        }
        case "CHANGE_TASK_TITLE": {
            return {...state,
                [action.payload.todolistId]:state[action.payload.todolistId].map(m=> m.id === action.payload.id ? {...m, title: action.payload.newTitle } : m)
            }
        }
        case "ADD_TODOLIST": {
            let newState = {...state}

            newState[v1()] = []
            return newState
        }
        default:
            throw new Error("I don't understand this type")
    }
}
type ActionType = RemoveTasksACType | AddTasksACType | ChangeStatusACType | ChangeTaskTitleACType | addTodoListACType

type RemoveTasksACType = ReturnType<typeof removeTasksAC>
export const removeTasksAC = (id: string, todoListId: string) => {
    return {
        type: "REMOVE-TASKS",
        payload: {id, todoListId}
    } as const
}

type AddTasksACType = ReturnType<typeof addTasksAC>
export const addTasksAC = (title: string, todolistId: string) => {
    return {
        type: "ADD_TASKS",
        payload: {title, todolistId}
    } as const
}

type ChangeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: "CHANGE_STATUS",
        payload: {id, isDone, todolistId}
    } as const
}

type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (id: string, newTitle: string, todolistId: string) => {
    return {
        type: "CHANGE_TASK_TITLE",
        payload: {id, newTitle, todolistId}
    } as const
}