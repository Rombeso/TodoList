import { Dispatch } from 'redux'
import { setAppStatusAC} from "../../app/app-reducer";
import {authAPI, loginParamsType, TaskType, todolistsAPI} from "../../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";
import {AxiosError} from "axios";
import {addTaskAC} from "../TodolistsList/Todolist/tasks-reducer";
import {clearTodosDataAC, ClearTodosDataActionType} from "../TodolistsList/Todolist/todolists-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{value: boolean}>){
            state.isLoggedIn = action.payload.value
        }
    }
})
export const {setIsLoggedInAC} = slice.actions

// type InitialStateType = typeof initialState

export const authReducer = slice.reducer
//     (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case 'login/SET-IS-LOGGED-IN':
//             return {...state, isLoggedIn: action.value}
//         default:
//             return state
//     }
// }

// actions
// export const setIsLoggedInAC = (value: boolean) =>
//     ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: loginParamsType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status:'loading'}))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAppStatusAC({status:'succeeded'}))
                dispatch(setIsLoggedInAC({value: true}))
            } else {
                handleServerAppError(dispatch, res.data)

            }
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status:'loading'}))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAppStatusAC({status:'succeeded'}))
                dispatch(setIsLoggedInAC({value: false}))
                dispatch(clearTodosDataAC())
            } else {
                handleServerAppError(dispatch, res.data)

            }
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })
}


// types
// type ActionsType = ReturnType<typeof setIsLoggedInAC>
//     | SetAppStatusType
//     | SetAppErrorType
//     | ClearTodosDataActionType

