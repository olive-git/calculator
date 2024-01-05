import { Component } from "react";
import { NumericKeyboard } from "./Keyboard";
import { Screen } from "./Screen";
import { Column } from "./Column";

export class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            entries: ''
        }
    }
    number = (num) => {
        this.setState({ entries: num})
    }
    render(){
        
        const entries = this.state.entries;
        return <div className="row">
            {/* <Column borderColor="primary" content={<Keyboard />} /> */}
            <Column content={<Screen entries={entries} />} />
            <Column content={<NumericKeyboard keyboardType="number" number={this.number} />} />
        </div>
    }
}