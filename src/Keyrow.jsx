import { Component } from "react";
import './style/keyboard.css'

export class Key extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        this.props.newMessage(e.target.value)
    }
    render(){
        const {keyValue} = this.props
        return <button className="btn btn-light btn-keyboard" onClick={this.handleClick} value={keyValue}>{keyValue}</button>
    }
}

export class Keyrow extends Component {
    constructor(props){
        super(props)
    }

    render(){

        // const handleClick = (key) => {
        //     console.log("The key clicked is " + key);
        // }

        function newMessage (newMessage){
            console.log("Ce nouveau message est " + newMessage)
        }

        const rows = []
        const {row} = this.props
        let i = 0;
        row.forEach(r => {
            rows.push(<div key={i} className="col-4"><Key key={i} keyValue={r} newMessage={newMessage} /></div>)
            i++
        })
        return <div className="row">
            {rows}
        </div>
    }
}