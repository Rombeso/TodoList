import {v1} from 'uuid';
import {todolistsAPI, TodolistType} from '../api/todolists-api'
import {AppRootStateType} from "./store";
import {Dispatch} from "redux";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    todoList: TodolistType
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id: string
    filter: FilterValuesType
}

// export type SetTodosActionType = {
//     tape: 'SET-TODOS',
//     todolists: TodolistType[]
// }

export type SetTodosActionType = ReturnType<typeof setTodosAC>


type ActionsType = RemoveTodolistActionType | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType
    | SetTodosActionType

const initialState: Array<TodolistDomainType> = [
    /*{id: todolistId1, title: 'What to learn', filter: 'all', addedDate: '', order: 0},
    {id: todolistId2, title: 'What to buy', filter: 'all', addedDate: '', order: 0}*/
]

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case "SET-TODOS": {
            return action.todolists.map((tl) => {
                return {...tl, filter: 'all'}
            })
        }

        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            return [{
                id: action.todoList.id,
                title: action.todoList.title,
                filter: 'all',
                addedDate: '',
                order: 0
            }, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.filter;
            }
            return [...state]
        }
        default:
            return state;
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}
export const addTodolistAC = (todoList: TodolistType): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', todoList}
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter}
}

export const setTodosAC = (todolists: TodolistType[]) => {
    return {
        type: 'SET-TODOS',
        todolists,
    } as const
}

export const setTodosTC = () => (dispatch: Dispatch): void =>{
    todolistsAPI.getTodolists()
        .then((res)=>{
            let todos = res.data
            dispatch(setTodosAC(todos))
        })
}

export const removeTodolistTC = (todolistId: string) => (dispatch: Dispatch): void =>{
    todolistsAPI.deleteTodolist(todolistId)
        .then((res)=>{
            dispatch(removeTodolistAC(todolistId))
        })
}

export const addTodolistTC = (title: string) => (dispatch: Dispatch): void =>{
    todolistsAPI.createTodolist(title)
        .then((res)=>{
            let todoList = res.data.data.item
            dispatch(addTodolistAC(todoList))
        })
}

export const changeTodolistTitleTC = (todolistId: string, title: string) => (dispatch: Dispatch): void =>{
    todolistsAPI.updateTodolist(todolistId, title)
        .then((res)=>{
            // let todoList = res.data.data.item
            dispatch(changeTodolistTitleAC(todolistId, title))
        })
}