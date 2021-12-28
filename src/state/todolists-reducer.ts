import {FilterValuesType, TodolistType} from "../App";


export const todolistsReducer = (state: Array<TodolistType>, action: MainType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            let newState = [...state]
            return newState.filter(tl => tl.id != action.payload.id)
        }
        case "ADD_TODOLIST": {
            return [...state, {id: action.payload.id, title: action.payload.title, filter: 'all' as FilterValuesType}]
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
type MainType = RemoveTodoListACType | AddTodoListACType | ChangeTodoListTitleACType | ChangeTodoListFilterACType

type RemoveTodoListACType = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id: id
        }
    } as const
}

type AddTodoListACType = ReturnType<typeof AddTodoListAC>
export const AddTodoListAC = (title: string, id: string) => {
    return {
        type: "ADD_TODOLIST",
        payload: {
            title: title,
            id: id
        }
    } as const
}
type ChangeTodoListTitleACType = ReturnType<typeof ChangeTodoListTitleAC>
export const ChangeTodoListTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id: todolistId2,
            title: newTodolistTitle
        }
    }
}

type ChangeTodoListFilterACType = ReturnType<typeof ChangeTodoListFilterAC>
export const ChangeTodoListFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id: todolistId2,
            filter: newFilter
        }
    }
}