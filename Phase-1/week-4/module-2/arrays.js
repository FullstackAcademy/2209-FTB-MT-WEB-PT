//Part A: Create arrays
// An array containing rewards available
const rewards = ['mittens', 'wine opener', 'mugs', 'snow globe', 'gift basket'];

//An array containing  daily sales
const dailySales = [88, 78, 68, 65, 40, 21];

//An array of customer
const customers = ['Katy', 'Peter', 'Robert', 'Mary', 'Susan'];

//Part B: typeof
const bestCustomer = 'Katy';
console.log('\n', '\n', '*************TYPEOF***************', '\n');
console.log("typeof bestCustomer===>", typeof bestCustomer);
console.log("typeof Customers===>", typeof customers);

function isMyInputAnArray(myInput) {
  if (Array.isArray(myInput)) {
    return 'It is an array';
  } else {
    return 'No, your input is not an array '
  }
};

console.log("isMyInputAnArray, input bestCustomer ===> ", isMyInputAnArray(bestCustomer));
console.log("isMyInputAnArray, input Customers ===> ", isMyInputAnArray(customers));

//Part C: Bracket Access
console.log('\n', '\n', '*************Bracket Access*************', '\n');
const firstCustomer = customers[0];// Katy 

let firstReward = rewards[0];
console.log("What is the first reward? ", firstReward)

//Let's write a function that allow a customer pick their lucky number
function rewardDrawing(rewardsArr, luckyNum) {

  let randomReward = rewardsArr[luckyNum];

  return randomReward;
}

console.log("Reward Drawing result ONE ==>", rewardDrawing(rewards, 1));


//Part D: Bracket assignment - Rewards out of stock
console.log('\n', '\n', '*************Bracket Assignment*************', '\n');
rewards[1] = 'can opener';
// customers[] = 'Kathy'; THIS WILL GIVE YOU ERROR 
// customers = ['Kathy']; THIS WILL Change the entire customers array to ['Kathy']; 

console.log("Updated Rewards==>", rewards);
console.log("Reward Drawing result TWO  ==>", rewardDrawing(rewards, 1));

//Part E: .length property - Do I have enough rewards?
console.log('\n', '\n', '*************.LENGTH*************', '\n');
function enoughRewards(rewardsArr, customersArr) {
  const rewardsAvailable = rewardsArr.length;
  const numOfCustomers = customersArr.length;

  if (rewardsAvailable === numOfCustomers) {
    return 'Just enough rewards for each customer'
  } else if (rewardsAvailable < numOfCustomers) {
    return 'Not enough rewards';
  } else {
    return 'Rewards available is more than number of customers';
  }
};
console.log("Do I have enough rewards, RUN ONE?", enoughRewards(rewards, customers));

//Part F: .POP/.PUSH- Do I have enough rewards?
//Gave out a reward to a customer
console.log('\n', '\n', '*************POP/PUSH*************', '\n');

const rewardGaveOut = rewards.pop();
console.log("Rewards gave out==>", rewardGaveOut);
console.log("Do I have enough rewards after giving out one reward, RUN TWO?", enoughRewards(rewards, customers))

//Add one more rewards so we will have enough to the END of the array
const newRewardLength = rewards.push('tv');
console.log("what", newRewardLength);
console.log("Do I have enough rewards, RUN Three after adding tv?", enoughRewards(rewards, customers))


//Part G: .UNSHIFT/SHIFT
//Make two more sales
const newLengthOfDailySales = dailySales.unshift(20000, 1000);
console.log('\n', '\n', '*************SHIFT/UNSHIFT*************', '\n');
console.log("New Length of sales ", newLengthOfDailySales);
console.log(" Daily Sales after adding two sales ", dailySales);

//Correct error
const firstSaleToDelete = dailySales.shift();
console.log("fisrtSale==>", firstSaleToDelete)
console.log(" Daily Sales after removing the first  ", dailySales)


//Part H: .INDEXOF()
//What is the indexOf the top prize tv ?
console.log('\n', '\n', '*************INDEXOF*************', '\n');
const topPrizeIndex = rewards.indexOf('tv');
console.log("rewards array==>", rewards)
console.log("Top Prize Index", topPrizeIndex);

//Part I: .SLICE()
console.log('\n', '\n', '*************SLICE/INCLUDES*************', '\n');
const fruits = ['apple', 'orange', 'mango', 'grape', 'watermelon'];
//Create a copy of top selling fruits
const fruitsCopy = fruits.slice();

fruitsCopy[4] = 'kiwi';

console.log("Fruits did not change after changing the copy", fruits);
console.log("FruitsCopy after changing watermelon to kiwi", fruitsCopy);

const fruitsExcludingTopThree = fruitsCopy.slice(3);
console.log("FruitsCopy after slicing at 3", fruitsCopy);
console.log("FruitsCopy that are not top three", fruitsExcludingTopThree);

const leastFavFruit = fruitsCopy.slice(-1);
console.log("leastFavFruit===> ", leastFavFruit);

function isMyFavFruitInclude(fruitArr, myFavFruit) {
  if (fruitArr.includes(myFavFruit)) {
    return 'We carry your favorite fruit ' + myFavFruit;
  } else {
    return 'Sorry we do not carry your fav fruit';
  }
}
console.log("Do you have strawberry for sale ? ", isMyFavFruitInclude(fruitsCopy, 'strawberry'));

console.log("Do you have kiwi for sale ? ", isMyFavFruitInclude(fruitsCopy, 'kiwi'));


//Part J: .REVERSE
console.log('\n', '\n', '*************REVERSE*************', '\n');

console.log("Daily Sales Arr BEFORE REVERSE ==>", dailySales);

const reversedDailySales = dailySales.reverse();

console.log("Daily Sales Reversed", reversedDailySales);
