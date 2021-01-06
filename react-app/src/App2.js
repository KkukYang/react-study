import React, {useState, useEffect} from "react";
import "./App2.css";

function App2() {
    var [state, setState] = useState({
        funcValue: "remove func",
        classValue: "remove class"
    });

    var [funcShow, setFuncShow] = useState(true);
    var [classShow, setClassShow] = useState(true);
    return (
        <div className="container">
            <h1>Hello World 안녕</h1>
            <input type={"button"} value={state.funcValue} onClick={function (e) {
                if (e.target.value.includes("remove")) {
                    // e.target.value = "trigger func";
                    setState({
                        funcValue: "trigger func",
                        classValue: state.classValue
                    });
                    setFuncShow(false);
                } else {
                    // e.target.value = "remove func";
                    setState({
                        funcValue: "remove func",
                        classValue: state.classValue
                    });
                    setFuncShow(true);
                }
            }}/>
            <input type={"button"} value={state.classValue} onClick={function (e) {
                if (e.target.value.includes("remove")) {
                    // e.target.value = "trigger func";
                    setState({
                        funcValue: state.funcValue,
                        classValue: "trigger class"
                    });
                    setClassShow(false);
                } else {
                    // e.target.value = "remove func";
                    setState({
                        funcValue: state.funcValue,
                        classValue: "remove class"
                    });
                    setClassShow(true);
                }
                // setClassShow(false);
            }}/>

            {funcShow ? <FuncComp initNumber={5}></FuncComp> : null}
            {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
        </div>
    );
}

export default App2;


var funcStyle = "color:yellow";
var funcId = 0;

function FuncComp(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];

    // var dateState = useState((new Date()).toString());
    // var _date = dateState[0];
    // var setDate = dateState[1];

    var [_date, setDate] = useState((new Date()).toString());

    //side effect componentDidMount -> 딱 한번만.
    useEffect(function () {
        console.log("%cfunc => useEffect  (componentDidMount) A " + (++funcId), funcStyle);
        document.title = number;//number + " : " +_date;
        return function cleanup() {
            //clean up. componentWillUnmount()
            console.log("%cfunc cleanup => useEffect  return (componentWillUnMount) A " + (++funcId), funcStyle);
        }
    }, []);//[number] 감시.

    //side effect number
    useEffect(function () {
        console.log("%cfunc => useEffect number (componentDidMount & componentDidUpdate) A " + (++funcId), funcStyle);
        document.title = number;//number + " : " +_date;
        return function cleanup() {
            //clean up. componentWillUnmount()
            console.log("%cfunc cleanup => useEffect number return (componentDidMount & componentDidUpdate) A " + (++funcId), funcStyle);
        }
    }, [number]);//[number] 감시.

    //side effect _date -> 변한 값에 대해서만 감시.
    useEffect(function () {
        console.log("%cfunc => useEffect _date (componentDidMount & componentDidUpdate) A " + (++funcId), funcStyle);
        document.title = _date;//number + " : " +_date;
        return function cleanup() {
            //clean up. componentWillUnmount()
            console.log("%cfunc cleanup => useEffect _date return (componentDidMount & componentDidUpdate) A " + (++funcId), funcStyle);
        }
    }, [_date]);//[_date] 감시.

    // //side effect
    // useEffect(function(){
    //     console.log("%cfunc => useEffect (componentDidMount & componentDidUpdate) B " + (++funcId), funcStyle);
    //     document.title = number + " : " +_date;
    // });

    // console.log("numberState", numberState);
    console.log("%cfunc => render " + (++funcId), funcStyle);

    //main effect
    return (
        <div className={"container"}>
            <h2>function style component</h2>
            <p>Number : {props.initNumber}</p>
            <p>numberState[0] : {number}</p>
            <p>dateState[0] : {_date}</p>
            <input type={"button"} value={"random"}
                   onClick={
                       function () {
                           // this.setState({
                           //     number: Math.random(),
                           // })
                           setNumber(Math.random());
                       }
                   }
            ></input>
            <input type={"button"} value={"date"}
                   onClick={
                       function () {
                           setDate((new Date()).toString());
                       }
                   }
            ></input>
        </div>
    );
}

var classStyle = "color:red";

//원래 리액트 라이프사이클이 클래스 스타일에서만 되었는데,,
//함수형에서도 Hook 을 통해서 된다.
class ClassComp extends React.Component {
    state = {
        number: this.props.initNumber,
        date: (new Date()).toString()
    }

    // UNSAFE_componentWillMount() {
    //     console.log("%cclass => UNSAFE_componentWillMount()", classStyle);
    // }

    componentWillMount() {
        console.log("%cclass => componentWillMount()", classStyle);
    }

    componentDidMount() {
        console.log("%cclass => componentDidMount()", classStyle);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("%cclass => shouldComponentUpdate()", classStyle);
        return true;// render() 해라.
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("%cclass => componentWillUpdate()", classStyle);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("%cclass => componentDidUpdate()", classStyle);
    }

    componentWillUnmount() {
        console.log("%cclass => componentWillUnmount()", classStyle);
    }


    render() {
        console.log("%cclass => render()", classStyle);
        return (
            <div className={"container"}>
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <p>Date : {this.state.date}</p>
                <input type={"button"} value={"random"}
                       onClick={
                           function () {
                               this.setState({
                                   number: Math.random(),
                               })
                           }.bind(this)
                       }
                ></input>
                <input type={"button"} value={"date"}
                       onClick={
                           function () {
                               this.setState({
                                   date: (new Date()).toString()
                               })
                           }.bind(this)
                       }
                ></input>
            </div>
        )
    }
}