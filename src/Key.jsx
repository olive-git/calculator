import { Component } from "react";
import './style/keyboard.css'

export class Key extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        console.log(e.target.value)
    }
    render(){
        const {keyValue} = this.props
        return <button className="btn btn-light btn-keyboard" onClick={this.handleClick} value={keyValue}>{keyValue}</button>
    }
}