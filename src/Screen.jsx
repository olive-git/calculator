import { Component } from "react";
import './style/screen.css'

export class Screen extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className="screen container bg-light">
            {/* <span className="resultText">Here displays the result of your calculation.</span> */}
            {/* <div className="result">{this.props.entries}</div> */}
            <input type="text" name="" id="entries" className="entries" value={this.props.entries} />
        </div>
    }
}