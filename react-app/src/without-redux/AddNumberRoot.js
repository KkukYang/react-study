import React, {Component} from 'react';
import AddNumber from "./AddNumber";

class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <AddNumber onClick={function (size) {
                    // alert("size : " + size);
                    this.props.onClick(size);
                }.bind(this)}></AddNumber>
            </div>
        );
    }
}

export default AddNumberRoot;
