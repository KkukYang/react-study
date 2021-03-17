import AddNumber from "../AddNumber";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    number: state.number,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({
        type: "INCREMENT",
        size: size,
      });
    },
  };
}

// https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
export default connect(mapStateToProps, mapDispatchToProps)(AddNumber);

/*import AddNumber from "../AddNumber";
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
}*/
