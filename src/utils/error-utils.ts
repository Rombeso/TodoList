import {setAppErrorAC, SetAppErrorType, setAppStatusAC, SetAppStatusType} from "../app/app-reducer";
import {ResponseType} from "../api/todolists-api";
import {Dispatch} from "redux";

type ActionErrorType = SetAppStatusType | SetAppErrorType

export const handleServerNetworkError = (dispatch: Dispatch<ActionErrorType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

export const handleServerAppError = <T>(dispatch: Dispatch<ActionErrorType>, data: ResponseType<T>) => {
    dispatch(setAppStatusAC('failed'))
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
}