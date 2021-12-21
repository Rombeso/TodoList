import React from "react";
import {FilterValuesType} from "../App";

export const FilterReducer = (state: FilterValuesType, action: ChangeFilterACType) => {
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