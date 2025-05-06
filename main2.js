const characters = [ { 
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
     }, 
    { 
    name: "Leia Organa", 
    height: 160,
    gender: "female", 
    mass: 56,
    eye_color: "blue",
     }, 
    { 
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
     },
     { 
    name: "Chewie",
    height: 222, 
    gender: "male",
    mass: 190,
    eye_color: "black",
     },
     {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
     },
     ];
// 1
let char=characters.find(fName=>fName.mass>75);
console.log(char)
// 2
let heightChar = characters.find(height => height.height < 180);
if(heightChar){
    console.log(heightChar.eye_color)
}else{
    console.log("No Characters")
}
// 3
let tller=characters.find(tall=>tall.height>150)
console.log(tller)
// 4
let female = characters.filter(femalGender => femalGender.gender === "female");
console.log(female);
// 5
let eyeColors=characters.map(eye=>eye.eye_color)
console.log(eyeColors)
// 6
let masses=characters.map(ms=>ms.mass)
console.log(masses)
// 7
const sortedByName =characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);
// 8
let sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);
// 9
let everychs=characters.every(height=>height.height>100)
console.log(everychs)
// 10
let lighter=characters.every(short=>short.height<200)
console.log(lighter)
// 11
let somechar=characters.some(blackey=>blackey.eye_color==="black")
console.log(somechar)
// 12
let includ = characters.some(charHeight => charHeight.height === 177);
console.log(includ);

