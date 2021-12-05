import React from "react";
import {FilterValuesType} from "../App";
// import './../App.css';
type propsType = {
    name:string
    callback:()=>void
    // className?:string
    filter?:FilterValuesType
}

export const Button = (props: propsType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button className={props.name === props.filter ? "active-filter" : ""} onClick={onClickHandler}>{props.name}</button>
    )

}