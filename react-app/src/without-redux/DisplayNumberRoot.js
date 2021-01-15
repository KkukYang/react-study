import React, {Component} from 'react';
import DisplayNumber from "./DisplayNumber";

class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>DisplayNumberRoot</h1>
                <DisplayNumber number={this.props.number}></DisplayNumber>
            </div>
        );
    }
}

export default DisplayNumberRoot;
