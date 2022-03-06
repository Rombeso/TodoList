import {setAppErrorAC, SetAppErrorType, setAppStatusAC, SetAppStatusType} from "../app/app-reducer";
import {ResponseType} from "../api/todolists-api";
import {Dispatch} from "redux";

type ActionErrorType = SetAppStatusType | SetAppErrorType

export const handleServerNetworkError = (dispatch: Dispatch<ActionErrorType>, message: string) => {
    dispatch(setAppErrorAC({error:message}))
    dispatch(setAppStatusAC({status:'failed'}))
}

export const handleServerAppError = <T>(dispatch: Dispatch<ActionErrorType>, data: ResponseType<T>) => {
    dispatch(setAppStatusAC({status:'failed'}))
    if (data.messages.length) {
        dispatch(setAppErrorAC({error:data.messages[0]}))
    } else {
        dispatch(setAppErrorAC({error:'Some error occurred'}))
    }
}