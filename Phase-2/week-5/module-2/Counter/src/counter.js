import React from "react";
//  What are props? Props are simply arguments passed into a component, as though
// they were arguments to a function. The component can then use this data to
// render something or pass the data on to another component.

// The React library was built to handle data that changes over time. Props allow
// data to flow downward into components from a central source (generally, an API),
// without needing any code inside the components that receive props to handle
// changes in this data.

const Counter = (props) => {
   console.log(props)
   return (
      <div>
    <p> You have clicked {props.number} times </p>
    <button onClick={() => props.handleIncrement() }> Click me to increment</button>
    </div>
   )
}
export default Counter