import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [drinks, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tequila")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            var res = [];
            for(var i in result){
              res.push(result[i])
            }
            setItems({drinks: res[0]});
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if(drinks != null){
      console.log(drinks)
      return (
        <ul>
          {drinks.drinks.map(item => 
           (
            <li key={item.idDrink}> <br/>
              id: {item.idDrink} <br/>
              Drink Name: {item.strDrink} <br/>
              Category: {item.strCategory} <br/>
              Glass Type: {item.strGlass} <br/>
              Instruction: {item.strInstructions}
            </li>
          ))}
        </ul>
      );
    }
}

export default App;
