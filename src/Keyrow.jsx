import { Component } from "react";
import {Key} from './Key';

export class Keyrow extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const rows = []
        const {row} = this.props
        let i = 0;
        row.forEach(r => {
            rows.push(<div key={i} className="col-4"><Key key={i} keyValue={r} /></div>)
            i++
        })
        return <div className="row">
            {rows}
        </div>
    }
}