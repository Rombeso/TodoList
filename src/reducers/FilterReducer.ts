import React from "react";
import {FilterValuesType} from "../App";

let initialState:FilterValuesType = 'all'
export const FilterReducer = (state = initialState, action: ChangeFilterACType) => {
    switch (action.type) {
        case 'CHANGE_FILTER': {
            return action.payload.value
        }
        default:
            return state
    }
}
type ChangeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: 'CHANGE_FILTER',
        payload: {
            value: value
        }
    } as const
}