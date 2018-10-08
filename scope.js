// var name = af tab will give you the following layout
// var add =  () => {
//
// }
// if you don't use var it will be a global variable and seen everywhere
// lexical scope means it can be seen from the level above
// block scope
var name = 'Gillian';

var secretsFunction = function(){
  var pinCode = [0,0,1,3];
  console.log("pincode inside function:", pinCode);
  console.log("name inside function", name);
}

secretsFunction();

// console.log("pincode outside function", pinCode);

var filterNamesByLetter = function(names, letter){
    var studentArray = [];
  for(let name of names){//using let instead of var it is a temp variable we want to destroy after the loop
    if(name.substring(0,3)=== letter){ //you could also do name[0] or char_at?
      studentArray.push(name);
    }
  }
  return studentArray
};

var students = ["Gillian", "Neil", "Andrew", "Anna", "David"];
var filteredStudents = filterNamesByLetter(students, "And")
console.log("filtered Students: ", filteredStudents);

var isItFive = (number) => {
  let result;

  if(number===5){
    result = true;
  }else{
    result = false;
  }
  return result
}

//const variable keyword -- these would be values that absolutely cannot be changed

const calculateEnergy = function(mass){
  const speedOfLight = 299793458;
  return mass * speedOfLight**2;
}

const result = calculateEnergy(75);
console.log("result:", result);

// although the object is a constant it will not stop you from changing the attributes
const song = {
  title: "Raspberry Beret",
  artist: "prince"
};

song.title = "When Doves Cry"

console.log("Song:", song);
