// var temperature = 5;
//
// if(temperature>20){
//   var message = "It's hot hot hot!"
// } else if (temperature >10 && temperature < 20){
// var message = "It's pretty mild!";
// } else {
//   var message = "standard Scottish weather"
// }
// //it is important you use the bracket format above or it will break
// console.log("message:", message); //log and tab is a shortcut for console.log();
//
// //if(){do something} else if(){do something} else{} js doesn't use end so don't need it
//
// //short circuiting is defined as as long as the first bit is true it will kick out of the if statemenet before getting to a later bit that might cause an error.  need to test dynamically
//
//

if(NaN){
  var result = "The expression evaluates to true";
}else{
  var result = "The expression evaluates to false";
}

console.log("result:", result);
// null will evaluate to a false value
//string will evaluate to truth as long as there are characters in the string, false if empty string
// numbers either positive or negative are truthy but 0 is false this relates to how it stores information in binary. 0 would be stored as 0000 5
//NaN is false
//undefined is false
// if you want to test go to node type Boolean() and put the item you are checking inside the brackets

// JS is weak typed ie "hello + 20 will give a string of 'hello 20' risk of bugs because of this

// 2 == "2" will evaluate to true
// 2==="2" will evaluate to false its like an absolute equals basically use this!

//not equvalent is !==

//logical operators

// && for AND || for OR ! is used for NOT ! can be used to invert the return value ie convert true ot false using !true 
