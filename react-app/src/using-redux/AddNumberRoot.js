import React, {Component} from 'react';
// import AddNumber from "./AddNumber";
import AddNumber from "./containers/AddNumber";

class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>AddNumberRoot</h1>
                {/*<AddNumber onClick={function (size) {*/}
                {/*    // alert("size : " + size);*/}
                {/*    this.props.onClick(size);*/}
                {/*}.bind(this)}></AddNumber>*/}

                <AddNumber></AddNumber>
            </div>
        );
    }
}

export default AddNumberRoot;
