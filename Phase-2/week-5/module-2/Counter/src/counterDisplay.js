import React, { useEffect, useState } from "react";
import Counter from "./counter";

// Called function Component.. 
const Count = () => {
const [count, setCount] = useState(0);

useEffect(() => {
    console.log(`you have clicked this ${count} many times`);
})
function up () {
     setCount(count => count +1);
}
return (
<div>
    <Counter number={count} handleIncrement={up}/>
    
    {/* <p> You have clicked {count} times </p>
    <button onClick={() =>setCount(count+1)}> Click me to increment</button> */}

</div>

)
}


export default Count;