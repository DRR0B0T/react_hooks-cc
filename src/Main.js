import React from 'react'
import {useAlert} from "./alert/AlertContext";

export default function Main() {
    const {show} = useAlert()

    return (
        <div>
            <h1>Example</h1>
            <button onClick={() => show('Этот текст из Main.js')} className="btn btn-success">Show Alert</button>
        </div>
    )
}