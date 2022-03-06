import {Dispatch} from "redux";
import {authAPI} from "../api/todolists-api";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{status: RequestStatusType}>){
            state.status = action.payload.status
        },
        setAppErrorAC(state, action: PayloadAction<{error: string | null}>){
            state.error = action.payload.error
        },
        setIsInitializedAC(state, action: PayloadAction<{isInitialized:boolean}>){
            state.isInitialized = action.payload.isInitialized
        },
    }
})

export const {setAppStatusAC, setAppErrorAC, setIsInitializedAC} = slice.actions

// type InitialStateType = typeof initialState

export const appReducer = slice.reducer
//     (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case 'APP/SET-STATUS':
//             return {...state, status: action.status}
//         case 'APP/SET-ERROR':
//             return {...state, error: action.error}
//         case 'APP/SET-INITIALIZED':
//             return {...state, isInitialized: action.isInitialized}
//         default:
//             return state
//     }
// }

// export const setAppStatusAC = (status: RequestStatusType) => {
//     return {
//         type: 'APP/SET-STATUS',
//         status
//     } as const
// }
// export const setAppErrorAC = (error: string | null) => {
//     return {
//         type: 'APP/SET-ERROR',
//         error
//     } as const
// }
//
// export const setIsInitializedAC = (isInitialized:boolean)=> {
//     return {
//         type: 'APP/SET-INITIALIZED',
//         isInitialized
//
//     } as const
// }

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}));
        } else {
        }
    })
        .finally(() => {
                dispatch(setIsInitializedAC({isInitialized: true}));
        }
        )
}

// type ActionsType = SetAppStatusType
//     | SetAppErrorType
//     | SetIsInitializedType

export type SetAppStatusType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorType = ReturnType<typeof setAppErrorAC>
// export type SetIsInitializedType = ReturnType<typeof setIsInitializedAC>
