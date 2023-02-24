import React, {useState} from "react";
import s from "./App.module.css";

type ButtonType = {
    name: string
    disabled?:boolean
    callback:()=>void
}
export const Button = (props: ButtonType) => {
    return (
        <button className={s.button} onClick={props.callback} disabled={props.disabled}>{props.name}</button>

    )
}