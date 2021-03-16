import DisplayNumber from "../DisplayNumber";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}

function mapReduxDispatchToReactProps(dispatch) {
  return {};
}

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);
