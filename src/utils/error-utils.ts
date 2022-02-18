import {ActionsType, setAppErrorAC, setAppStatusAC} from "../app/app-reducer";
import {ResponseType} from "../api/todolists-api";
import {Dispatch} from "redux";

export const handleServerNetworkError = (dispatch: Dispatch<ActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

export const handleServerAppError = <T>(dispatch: Dispatch<ActionsType>, data: ResponseType<T>) => {
    dispatch(setAppStatusAC('failed'))
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
}