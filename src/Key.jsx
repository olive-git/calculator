import { Component } from "react";

export class Key extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        console.log(e.target)
    }
    render(){
        const {keyValue} = this.props
        return <button className="btn btn-light" onClick={this.handleClick}>{keyValue}</button>
    }
}