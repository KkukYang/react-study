import React, {Component} from "react";
import {
    Route,
    Switch,
    Link,
    NavLink,
    useParams
} from "react-router-dom";


function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

var contents = [
    {id: 1, title: "HTML", description: "HTML is ..."},
    {id: 2, title: "JS", description: "JS is ..."},
    {id: 3, title: "React", description: "React is ..."},
]

function Topic() {
    var params = useParams();
    console.log("params", params, params.topic_id);
    var topic_id = params.topic_id;
    var selected_topic = {
        title: "sorry",
        description: "Not Found"
    }
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].id === Number(topic_id)) {
            selected_topic = contents[i];
            break;
        }
    }
    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    )
}

function Topics() {
    var lis = [];

    for (var i = 0; i < contents.length; i++) {
        lis.push(<li key={contents[i].id}><NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink></li>)
    }

    return (
        <div>
            <h2>Topics</h2>
            Topics...
            <ul>
                {lis}

                {/*<li><NavLink to="/topics/1">HTML</NavLink></li>*/}
                {/*<li><NavLink to="/topics/2">JS</NavLink></li>*/}
                {/*<li><NavLink to="/topics/3">React</NavLink></li>*/}
            </ul>

            <Route path="/topics/:topic_id">
                <Topic></Topic>
            </Route>

            {/*<Switch>*/}
            {/*    <Route path="/topics/1">*/}
            {/*        HTML is ...*/}
            {/*    </Route>*/}
            {/*    <Route path="/topics/2">*/}
            {/*        JS is ...*/}
            {/*    </Route>*/}
            {/*    <Route path="/topics/3">*/}
            {/*        React is ...*/}
            {/*    </Route>*/}
            {/*</Switch>*/}

        </div>
    )
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function App3() {
    return (
        <div>
            <h1>React Router DOM example</h1>
            <ul>
                NavLink
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/topics">Topics</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>

                <br/>
                Link
                {/*Link 는 페이지에 바뀌어야 할 부분만 업데이트*/}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/contact">Contact</Link></li>

                <br/>
                a tag
                {/*a tag 는 페이지 전부를 리로드 하고*/}
                <li><a href="/">Home</a></li>
                <li><a href="/topics">Topics</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <br/>result<br/>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/topics">
                    <Topics></Topics>
                </Route>
                <Route path="/contact">
                    <Contact></Contact>
                </Route>
                {/*<Route path="/">*/}
                {/*    <Home></Home>*/}
                {/*</Route>*/}
                <Route path="/">Not found</Route>
            </Switch>
        </div>
    )
}

export default App3;
