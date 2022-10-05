/*
AND = &&
OR = ||
NOT = !
*/

console.log(' <------- AND Operator ------->')
  let pretzelsInStock = true;
  let amountOfCharge = 2.00;
  let size = "2inches"

  if (pretzelsInStock && amountOfCharge >= 1.50 && size === "2inches" ){
      console.log( " lets buy pretzels")
      console.log(typeof size);
  }
  else {
      console.log(' lets not buy pretzles')
  }
  console.log(' <------- OR Operator ------->')
  let rainy = true;
  let IsTheMovieout = false;
  let moneyIHave = 3.00;

  if ( IsTheMovieout) {
      console.log('go to the movies')
  }
  else if ( rainy || moneyIHave < 3.00) {
      console.log('Go to the park')
  } 
  console.log(' <------- NOT Operator ------->')
  // true
  if(!rainy){
      console.log('lets go to the movies')
  } else if (( rainy || IsTheMovieout) && moneyIHave <= 3.00){
      console.log('go to the park');
  } else if(!Ready) { console.log('device is not ready')}
  