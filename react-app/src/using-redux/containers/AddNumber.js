import AddNumber from "../AddNumber";
import React, {Component} from "react";
import store from "../store";

//컨테이너 컴포넌트.
export default class extends Component {
    render() {
        // AddNumber가 redux에 종속되지 않기 위한 작업.
        return <AddNumber onClick={function (size) {
            store.dispatch({
                type: "INCREMENT",
                size: size
            });
        }.bind(this)}></AddNumber>
    }
}
