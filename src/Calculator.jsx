import { Component } from "react";
import { Keyboard } from "./Keyboard";
import { Screen } from "./Screen";
import { Column } from "./Column";

export class Calculator extends Component {

    render(){
        return <div className="row">
            <Column borderColor="primary" content={<Keyboard />} />
            <Column borderColor="danger" content={<Screen />} />
        </div>
    }
}