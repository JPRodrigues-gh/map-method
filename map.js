  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums) {results.push(num * 2)};
// console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
// console.log(mapResults);


// Simplified w/ map()
const mapResultsSimplified = nums.map(function (num) {  return num * 2});
// console.log(mapResultsSimplified);

// Simplfied w/ map() + arrow function
const mapResultsArrow = nums.map(num => num * 2);
// console.log(mapResultsArrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// const studentsAsObjects = students.map(student => [id: student.id, name: student.name]);
// console.log(studentsAsObjects);

let newStudent=[];
for (student in students) {
    newStudent[student] = {
      id: students[student].id,
      name: students[student].name
    };
}
console.log(newStudent);

// const myObj = new Object(),
//       str = 'myString',
//       rand = Math.random(),
//       obj = new Object();

// myObj.type              = 'Dot syntax';
// myObj['date created']   = 'String with space';
// myObj[str]              = 'String value';
// myObj[rand]             = 'Random Number';
// myObj[obj]              = 'Object';
// myObj['']               = 'Even an empty string';

// console.log(myObj);

// let petNames = {
//   dog: 'Fido',
//   cat: 'Max',
//   fish: 'Bubbles',
//   python: 'Mr. Slithers',
// }

// let pairs = Object.entries(petNames);
// for (let pair of pairs){
//   console.log(pair[1], 'is a', pair[0]);
// }