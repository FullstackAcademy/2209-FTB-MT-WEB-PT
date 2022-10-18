/* eslint-disable no-extra-semi */
/* eslint-disable quotes */
//Resource link: https://suhas010.medium.com/understanding-scope-and-context-in-javascript-suhas-more-8f765e3867ba
/*
  state = global
  county = function
  city= block
 */
let globalSupplierInventory = 'I am the global supplier.';

function anyFunction() {
  console.log("From any function", globalSupplierInventory)
  console.log('\n')
};

anyFunction();

/****************** Functional Scope  *******************/

function hasLocalFunction() {
  let globalSupplierInventory = 'Within hasLocal Func, there is another global supplier.'
  console.log("From hasLocal Function", globalSupplierInventory);
  console.log('\n')
}
hasLocalFunction();

function noLocalFunction() {
  console.log("From noLocalFunction Function==>", globalSupplierInventory);
  console.log('\n')
}
noLocalFunction();

function changeGlobalFunction() {
  globalSupplierInventory = ' Got updated !!  I am a local supplier';
  console.log("From changeGlobalFunction Function", '\n', globalSupplierInventory);
  console.log('\n')
}
changeGlobalFunction();

function invokeWithInputFunction(globalSupplierInventory) {
  console.log("From invokeWithInputFunction", '\n', globalSupplierInventory);
  console.log('\n')
}
invokeWithInputFunction('INVOKED WITH  and UPDATED ---')

function countySupplierFunc() {
  let inventory = 'I am the county supplier';

  function citySupplierFunc() {
    console.log("inventory ", inventory);
    console.log('\n');
  }
  citySupplierFunc();
}
countySupplierFunc();

function countySupplierFunc2() {
  let inventory = 'I am the county supplier';

  function citySupplierFunc2() {
    let inventory = 'I am the city supplier'
    console.log("inventory ", inventory);
    console.log('\n')
  }
  citySupplierFunc2();
}
countySupplierFunc2();


/****************** VAR keyword  *******************/
//var keyword is a functional scope, and if define globally, it attached to window.Don't use it
//Var example
function varExample() {
  for (var i = 0; i < 3; i++) {
    console.log("i within the for loop", i)
  };

  console.log("i outside of for loop", i)
}
varExample();

function letExample() {
  for (let i = 0; i < 3; i++) {
    console.log("i within the for loop using let ", i)
  };
  //Uncomment this line to see the not defined error
  //console.log("i outside of for loop using let", i)
};
letExample();


/****************** BLOCK level  *******************/

function myBlockLevel() {
  if (true) {
    let blockLevelInventory = 'Block Level';
  }

  // console.log("blockLevel", blockLevelInventory);
};
console.log("Block Level", myBlockLevel());
