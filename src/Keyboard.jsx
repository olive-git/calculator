import { Component, createRef } from "react";
import { appConstants } from './constants/app.constants'

const NUMBERS = appConstants.NUMBERS;
const OPS = appConstants.OPS;

export function NumericKeyboard (props) {

    const handleClick = (e) => {
        // console.log("You clicked the key ", e.target.value)
        props.number(e.target.value)
    } 

    return <div className="container">
        {/* bloc des opérations */}
        <div className="row">
            {OPS.map((op, opIndex) => (
                <div key={opIndex} className="col-3">
                    <button key={opIndex} className="btn btn-light btn-keyboard" value={op}>{op}</button>
                </div>
            ))}
        </div>
        {/* clavier numérique */}
        {NUMBERS.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((num, index) => (
                    <div key={index} className="col-4">
                        <button key={index} className="btn btn-light btn-keyboard" value={num} onClick={handleClick}>{num}</button>
                    </div>
                    ))}
            </div>
            ))}
        <div>
        </div>
    </div>
}