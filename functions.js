console.log('MESSAGE:', sayHello()); // called hoisting, basically you can use a function before it is declared.  Not sure why this is a good thing.


//below is a named function declaration
function sayHello(name="World"){
  return `Hello ${name}`; //you need to use the return keyword otherwise nothing will happen
}
//"gillian" is a default value
//console.log("message:", sayHello("Louise"));//without round brackets on function it will return whole function
//if i had forgotten to pass the argument in the console.log(); it would have printed undefined for the name


//below is an anonymous function declaration
var add = function(firstNumber, secondNumber){
  return firstNumber + secondNumber;
};

console.log("Result:", add(3,4));

//arrow function - basically an anonymous function

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber; // can only be used where there is a single line of code

console.log("multiplication result: ", multiply(2,10));

var sayHi = () => "Hi!";
console.log(sayHi());
