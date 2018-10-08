// 1. Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.
//
// 2. Define an anonymous function expression that takes two arguments:
//
// - an object, for example, { name: 'Wojtek', age: 30 }
// - a string, for exmaple, 'name'
//
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

function sumTotal(array){
  var total=0;
  for (var arr of array){
    total += arr;
  }
    return total;

}
//searches values
var numArray=[1,2,3,4,5]

console.log("total = ", sumTotal(numArray));

var check = function(string1, object1){
  for(var obj in object1){
  if(string1 === object1[obj]){
  return true
    }

  }
  return false
}

var person = {name: "Andrew", age:25};
var string = "Andrew";

console.log("result is:", check(string, person));

//searches keys


var check = function(string1, object1){
  for(var obj in object1){
  if(string1 === obj){
  return true
    }

  }
  return false
}

var person = {name: "Andrew", age:25};
var string = "name";

console.log("result is:", check(string, person));
