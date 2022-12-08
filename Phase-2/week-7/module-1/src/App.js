import React, { useState } from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom"; //5.2.0

function App() {
  const nums = {
    "one": 1, 
    "two": 2,
    "three": 3
  }
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/">
          Home
        </Link>
        <Link className="App-link" to="/count">
          Count
        </Link>
        <Link className="App-link" to="/welcome">
          Welcome
        </Link>
        <Link className="App-link" to="/dog/1/hound">
          Dogs
        </Link>
      </header>
      <div>
        <switch>
          <Route path="/dog">
            <h2> Most usefully for Homepages</h2>
          </Route>

          <Route path="/count" component={Count} />
         
          
          <Route
            path="/welcome"
            render={(routeProps) =>  <Welcome {...nums} />}
          />
          <Route
             path="/dog/:puppyId/:breed"
            render={(routeProps) => <Dog {...routeProps} />}
          />
        </switch>
      </div>
    </div>
  );
}

function Welcome(props) {
  console.log(props);
  return (
    <div>
      <h1> Welcome All </h1>
    </div>
  );
}

function Dog(props) {
  console.log(props);
  const {puppyId, breed} = props.match.params;

  return (
    <div>
      <h1> I am Dog Number {puppyId}</h1>
      <h1> My Breed is {breed}</h1>
      <div onClick={() => {
        history.push("/")
      }}> Login </div>
    </div>
  );
}

function Count(props) {
  console.log(props);
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> You have clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment
        </button>
    </div>
  );
}

export default App;
