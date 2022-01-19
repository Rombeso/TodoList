import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export let todolistId1 = v1();
export let todolistId2 = v1();

const initialState: Array<TodolistType> = []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: MainType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            let newState = [...state]
            return newState.filter(tl => tl.id != action.payload.id)
        }
        case 'ADD_TODOLIST': {
            return [{id: action.payload.id, title: action.payload.title, filter: 'all' as FilterValuesType}, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            let newState = [...state]
            return newState.map(m => m.id == action.payload.id ? {...m, title: action.payload.title} : m)
        }
       case 'CHANGE-TODOLIST-FILTER': {
            let newState = [...state]
            return newState.map(m => m.id === action.payload.id ? {...m, filter: action.payload.filter} : m)
        }
        default:
            return state
    }
}
type MainType = removeTodoListACType | addTodoListACType | changeTodoListTitleACType | changeTodoListFilterACType

export type removeTodoListACType = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id: id
        }
    } as const
}

export type addTodoListACType = ReturnType<typeof AddTodolistAC>
export const AddTodolistAC = (title: string) => {
    return {
        type: "ADD_TODOLIST",
        payload: {title: title, id: v1() }
    } as const
}
type changeTodoListTitleACType = ReturnType<typeof ChangeTodoListTitleAC>
export const ChangeTodoListTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id: todolistId2,
            title: newTodolistTitle
        }
    }as const
}

type changeTodoListFilterACType = ReturnType<typeof ChangeTodoListFilterAC>
export const ChangeTodoListFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id: todolistId2,
            filter: newFilter
        }
    }as const
}