import React from "react";
import "./App2.css";

function App2() {
    return (
        <div>
            Hello World 안녕 국현ㅇㄹㄴ
            <FuncComp></FuncComp>
            <ClassComp></ClassComp>
        </div>
    );
}

export default App2;

function FuncComp() {
    return (
        <div className={"container"}>
            <h2>function style component</h2>
        </div>
    );
}

class ClassComp extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <h2>class style component</h2>
            </div>
        )
    }
}