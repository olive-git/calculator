import { Component, createRef } from "react";
import { Keyrow } from './Keyrow';
import { Key } from './Key';
import { appConstants } from './constants/app.constants'

const NUMBERS = appConstants.NUMBERS;
const OPS = appConstants.OPS;

export class Keyboard extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = createRef()
    }

    handleClick(e) {
        console.log(this.input.current.value)
    }

    render(){
        const numberKeys = []
        NUMBERS.forEach(num => {
            numberKeys.push(<Keyrow key={num} row={num} />)
        })
        const opsKeys = []
        let i = 0;
        OPS.forEach(op => {
            opsKeys.push(<Key key={i} keyValue={op} />)
            i++;
        })
        return <div className="m-2">
            <input type="text" ref={this.input} />
            <button onClick={this.handleClick}>Tester</button>
            <div>{opsKeys}</div>
            <div>{numberKeys}</div>
        </div>
    }
}