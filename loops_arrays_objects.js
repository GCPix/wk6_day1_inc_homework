// // //arrays
// var sports = ["Hockey", "Darts", "Wrestling"];
//
// // sports.push("Kickball");
// // sports.push("Cycling");
// // sports.push("Swimming");
// //
// // var removed = sports.splice(3, 1); // splice gives us the result as a new array
// // // the 3 is the element you have to start form, the 1 is the number of items after this so only 1, if htis was 2 it will give me kickballa nd cycling.  Splice will also remove the item from the original array
// // console.log("removed", removed);
// // console.log(sports);
// //
// // console.log("Number of sports: ", sports.length);
// // console.log("sport zero:",sports[0]);
// // console.log("sport zero:",sports[-1]);// gives you undefined, you can't work from the right of an array
// // console.log("sport zero:",sports[10]);//gives you undefined as there isn't anything in the 11th space
// //
// // sports.push("Tennis");
// //
// // console.log("Sports:", sports); //to add to the array
// // sports.pop(); // this will also return the item that has been popped
// // var returnedSport = sports.pop();
// // console.log("Sports:", returnedSport);
// // console.log("Sports:", sports); // to remove the last item of the array
// //
// // sports.shift(); // to remove somthing from the start of the array
// // sports.unshift("Basketball")
// // console.log("Sports:", sports);
// //
// // sports[0] = "Tiddleywinks";// to replace index with a new value
// // console.log("Sports:", sports);
// //
//
//
// //Loops
//
// for (var currentSport of sports){
//   console.log("Current Sport: ", currentSport);
// }
// //gives you the following based on the original array, bit like sports.each{|currentSport| blah}
// // Current Sport:  Hockey
// // Current Sport:  Darts
// // Current Sport:  Wrestling
//
// //var i = 0 is initializing the variable, you then till it when to stop finally you tell it to increment i
// for(var i = 0; i < sports.length; i++){
//   var currentSport = sports[i];
//   console.log("CurrentSport: ", currentSport);
// }
// // essentially these two methods are the same but the second will give us more flexability in terms of what items we want to look at or to search from the end of the array rather than the start.

//hashes (known as objects in JS) title, year and language are the keys and the right are the values
var movie = {
title: "The wicker Man",
year: 1973,
language: "English"};
// console.log("Movie:", movie);
//
// console.log("Movie Title:", movie.title);
//
movie.cast = ["Edward Woodward", "Christpher Lee", "Brit Eckland"]; // even though cast didn't exist this will add it
// console.log("Movie:", movie);
// movie.language = "German"; //will replace the existing value movie["language"] = "German"; will do the same thing.  The second version is useful if you have a hyphenated word ie "subtitle-language" which wouldn't be allowed normally
//
//
// console.log("Movie:", movie);
//
// delete movie.year; // removes the property from the hash
// console.log("Movie:", movie);

// bit below basically creates a new array item that i actually a hash of values
movie.ratings = {
  critic: 95,
  audience: 93
}

// console.log("Movie:", movie);
// console.log("Movie critic score:", movie.ratings.critic);//navigating  through nested objects (hashes)
// console.log("Main star:", movie.cast[0]); // namovie.ratings["critics"]ing through nested array inside object

var keys = Object.keys(movie);
console.log("Object Keys: ", keys);

// for looping through object Keys we use for in
// for var key in object

for (var key in movie){
  console.log("Key:", key);
  console.log("Value:", movie[key]);
}
