/***************************************** Practice 1 *****************************************/
// function minRooms(intervals){
//     // console.log('intervals', intervals);
//     // console.log('intervals[0][0]',intervals[0][0]);
//     // console.log('intervals[0][1]',intervals[0][1]);
//     if (intervals.length < 2) return intervals.length;
//     intervals.sort((a,b) => {
//         // console.log('a', a);
//         // console.log('b', b);
//         return a[0] - b[0];
//     });
//     console.log('intervals after sort', intervals);
//     console.log('intervals[0][1]',intervals[0][1]); 
//     let roomTime = [intervals[0][1]];
//     console.log('roomTime', roomTime);
// 
//     for (let i = 1; i < intervals.length; i++){
//         let [start, end] = [...intervals[i]];
//         console.log('start',start);
//         console.log('end',end);
//         let earliest = Math.min(...roomTime);
// 
//         if (start < earliest){
//         roomTime.push(end);
//         }else{
//         roomTime[roomTime.indexOf(earliest)] = end;
//         }
//     }
//     return roomTime.length;
// }
// 
// let intervals = [[0,30],[1,5],[2,3],[7,10],[5,6]];
// console.log('intervals berore sort', intervals);
// console.log("Room needed", minRooms(intervals));

/***************************************** Practice 2 *****************************************/

//     },
//     {
//         id: 'html',
//         dependencies: ['javascript', 'oo']
//     }
// ];

// var depArr = [];   

// function findDep(className, classes)  {
//     for (var i = 0; i < classes.length; i++ ){
//         if (classes[i].id == className){
//             if (classes[i].dependencies.length == 0){
//                 if (!(depArr.includes(classes[i].id)))
//                     depArr.push(classes[i].id);
//             }
//             else{
//                 for (var j = 0; j < classes[i].dependencies.length; j++) {
//                     if (!(depArr.includes(classes[i].dependencies[j])))
//                         depArr.push(classes[i].dependencies[j]);
//                     findDep(classes[i].dependencies[j], classes);
//                 }
//             }
//         }
//     }
// }

// var classToTake = "oo";
// findDep(classToTake, classes)
// console.log(`Dependencies for ${classToTake}: `, depArr);


/***************************************** Practice 3 *****************************************/

// let courses = [
//     {
//         id:50,
//         course: "Algebra"
//     },
//     {
//         id: 51,
//         course: "Math" 
//     }, 
//     {
//         id:50,
//         course: "History"
//     },
//     {
//         id: 52,
//         course: "Biology"
//     },
//     {
//         id: 50,
//         course: "Chemestry"
//     }
// 
// ];

// input coureses
// output
// [
//      {
//          id:50,
//          courses: ["Algebra", "History", "Chemestry"]
//      }
//
// ]

/***************************************** Practice 4 *****************************************/

// var test = "I am outside";

// function logIn(){
//     var test = "I am inside";
//     console.log(test);
//     // var test = "I am inside";
// }

// logIn();


/***************************************** Practice 5 *****************************************/
// var a = [
//     {divisor: 1, dividen: 2}, 
//     {divisor: 2, dividen: 1}, 
//     {divisor: 3, dividen: 4},
//     {divisor: 4, dividen: 3}, 
//     {divisor: 5, dividen: 6},
//     {divisor: 6, dividen: 5},
//     {divisor: 7, dividen: 8},
//     {divisor: 8, dividen: 7},
//     {divisor: 3, dividen: 1}, 
//     {divisor: 5, dividen: 1}
// ];

// function countReciprocal(a){
//     var match = 0;
//     for (var k = 0; k < a.length; k++) {
//         var currentEl = k; // it grabs the k-th element
//         for (var i = k + 1; i < a.length; i++){
//             if (a[currentEl].divisor == a[i].dividen && a[currentEl].dividen == a[i].divisor)
//                 match++;
//         }
//     }
//     return match;
// }

// console.log("countReciprocal", countReciprocal(a));

/***************************************** Practice 6 *****************************************/
//rite a function that will loop through a list of integers and print the index of each element after a 3 second delay.

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function 
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }


// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   // using the ES6 let syntax, it creates a new binding every single time the function is called
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

/***************************************** Practice 7 *****************************************/

//How does this works?
// var fullname = 'John Doe';
// var obj = {
//    fullname: 'Colin Ihrig',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;

// console.log(test);

// console.log(test.call(obj.prop));

/***************************************** Practice 8 *****************************************/
// OBJECT CREATION
// The Factory Pattern 
// function createPerson(name, age, job){
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         console.log(this.name);
//     };
//     return o;
// }

// var person1 = createPerson('Nicholoas', 29, 'Software Engineer');
// person1.sayName();
//////////////////////////
// function gizmo(id){
//     return {
//         id: id,
//         toString: function(){
//             return "gizmo: " + this.id;
//         }
//     };
// }

// function hoozit(id) {
//     var that = gizmo(id);
//     that.test = function (testid){
//         return testeid === this.id;
//     };
//     return that;
// }

// var newGizmo = gizmo(1);
// console.log(newGizmo.toString());
// console.log(newGizmo);
// var newHoozit = hoozit(2);
// console.log(newHoozit.toString());
// console.log(newHoozit);


// /////////
// function identity(x){
//     return x
// }

// function add(a,b){
//     return a + b;
// }
// function mul(a,b) {
//     return a*b;
//}
// function identity(x){
//     return function (){
//         return x
//     }
// }

// function addf(x){
//     return function (y){
//         return x + y;
//     }
// }
// console.log(addf(2)(4))

// function applyf(binary){
//     return function (x){
//         return function (y){
//             return binary(x,y);
//         }
//     }
// }
// addf = applyf(add);
// addf(3)(4);
// console.log(applyf(mul)(5)(6));




/***************************************** Practice 9 *****************************************/

// const arr = [10, 12, 15, 21];

// for (var i = 0; i < arr.length; i++) {

//   setTimeout(function() {

//     console.log(`Index is ${i}. Value is ${arr[i]}`);

//   }, 0);

// }

/***************************************** Practice 10 *****************************************/

// var var1 = "I am var1 on global";
// var obj = {
//     var1: "I am var1 inside obj",
//     displayVar1: function(){
//         setTimeout(function(){
//             return this.var1;
//         },1000);
//     }
// }

// console.log("var1", obj.var1);

/***************************************** Practice 11 *****************************************/

// function baz(){
//     // call-stack is: 'baz'
//     // so, our call-site is in the global scope
//     console.log('baz');
//     bar(); // <-- call-site for 'bar'
// }
// function bar(){
//     // call-stack is : 'baz' -> 'bar'
//     // so, our call-site is in 'baz'
//     console.log('bar');
//     foo(); // <-- call-site for 'foo'
// }
// function foo(){
//     // call-stack is: 'baz' -> 'bar' -> 'foo'
//     // so, our call-site is in 'bar'
//     console.log('foo');
// }
// baz(); // <-- call-site for 'baz'

/***************************************** Practice 12 *****************************************/

//function calling another function
// function wrap(execute){
//      try{
//         execute();
//     }  catch (e){
//         console.log(e.name + ': ' + e.message);
//     }
// }
// 
// var errorExec = wrap(function(){
//     throw new Error('Error Fermin');
// });
// errorExec;
// 
// var resultExec = wrap(function(){
//     return 'Result'
// });
// 
// console.log(errorExec && errorExec());      // null
// console.log(errorExec && resultExec());     // "Resut"
//
// console.log(typeof throw new Error('Error'));

/***************************************** Practice 13 *****************************************/

// compressing strings
// aaa: a3
// aabbbcc: a2b3c2
// aaccbb: a2c2b2
/*
let strInput = "aaccbaaa";

function count(strInput){
var hasArr ={};
    for (let i = 0; i < strInput.length; i++){
        if (hasArr[strInput[i]] == null){
            hasArr[strInput[i]] = 1;
        }else{ 
            hasArr[strInput[i]] += 1;
        }
        // console.log(strInput);
    }

    let keysArr = Object.keys(hasArr);
    let valsArr = Object.values(hasArr);
    var output = "";
    for (let i = 0; i < keysArr.length; i++){
        output += keysArr[i] + valsArr[i];
    }

    console.log(output)
}

count(strInput);
*/

/***************************************** Practice 14 *****************************************/

/*
let str = 'aaaaabbbbbcccccaaaaa';
let compressBad = (str) => {
    let compressedString = '';
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++){
        countConsecutive++;
        // If next character is diffrent than current, append this char to result 
        if (i+1 >= str.length || str[i] != str[i + 1]){
            compressedString += '' + str[i] + countConsecutive;
            countConsecutive = 0;
        }
    }
    return compressedString.length <  str.length ? compressedString : str;
}
console.log(compressBad(str));
*/

/***************************************** Practice 15 *****************************************/

// let str = 'aaaaabbbbbcccc';
// 
// let compressedString = '';
// let compress = (str) => {
//     let repeatCount = 0
//     for(let i  = 0; i < str.length; i++) {
//         repeatCount++;
//     
//         if (str[i] != str[i+1] || i + 1 >= str.length){
//             compressedString += str[i]+repeatCount;
//             repeatCount = 0;
//         }
//     
//     }
//     return compressedString.length >= str.length ? str : compressedString;
// 
// }
// console.log(compress(str));

/***************************************** Practice 16 *****************************************/

/* 
 * Your previous Ruby content is preserved below:
 *
 *
 * # Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
 *  
 *  # Example 1: Here
 *  # Input: arr = [1,2,2,1,1,3] 
 *  # Output: true
 *  # Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 *
 *  # Example 2: 
 *  # Input: arr = [1,2] -> 1-1, 2-1 (false because #occurences are repeating)
 *  # Output: false
 *
 *  # Example 3:
 *  # Input: arr = [-3,0,1,-3,1,1,1,-3,10,0],-> -3-3, 0-2, 1-4, 10-1, true
 *  # Output: true
 *
 *  # arr = [1,1,1,1]
 *  # arr = [1,1,1,1, 2,2,2,2] 
 *
 *  # a 
 *
 *  # a = [1,2,2,1,1,3]
 *  # h = {}
 *
 *  # a.each { |i|
 *  #   if h[i].nil?
 *  #     h[i]= 1
 *  #   else
 *  #     h[i] = h[i] + 1
 *  #   end
 *  # }
 *   */
// let arr = ['a','a', 'a', 'b', 'b',  'c', ];
/*
let arr = ['a','b','c'];
console.log(arr);
let h = {};
for (let i = 0; i < arr.length; i++){
    if (h[arr[i]] == null){
        h[arr[i]] = 1;
    }else{
        h[arr[i]] += 1;
    }
}

console.log(h);
let temp = {}

let trueOrFalseFunc = (h) =>{
    for (let i in h){
        if (temp[h[i]] == null){
            temp[h[i]] = 1; 
        }else{
            temp[h[i]] += 1;
        }

    }
console.log(temp);
    for (let i in temp){
        if (temp[i] > 1) {
            return false
        }
    }
    return true
}
console.log(trueOrFalseFunc(h));
*/

/***************************************** Practice 17 *****************************************/
// Parenthesis Matching
// input:
// arr = ["(){}[]", "{}()[]"]

// output:
// arr = ["YES", "NO"]

// function arrayOfValues(arrayOfBraces){
//     let returnAr = [];
//     arrayOfBraces.forEach( str => {
//         let isBalancedParenthesis = (str) => {
//             return !str.split('').reduce((uptoPrevChar, thisChar) => {
//                 if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
//                     return ++uptoPrevChar;
//                 } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
//                     return --uptoPrevChar;
//                 }
//                 return uptoPrevChar;
//             }, 0);
//         }
//         console.log(isBalancedParenthesis);
//         if (isBalancedParenthesis(str)){
//             returnAr.push('YES');
//         }else{
//             returnAr.push('NO');
//         }
//     });
//     return returnAr;
// }
// 
// let ar = ['(){}[]', '(){}['];
// console.log(arrayOfValues(ar));

/***************************************** Practice 18 *****************************************/
// <?php
// function isValid($coordinates){
//     $ar = [];
//     foreach ($coordinates as $coordinate){
//         $coordinate = explode(",", $coordinate);
// 
//         $latitude = str_replace('(', '', $coordinate[0]);
// 
//         $longitude = str_replace(')', '', trim($coordinate[1]) );
// 
// 
//         $latitude_regx = '/^(\+|-)?(?:90(?:(?:\.0{1,8})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,8})?))$/';
// 
//         $longitude_regx = '/^(\+|-)?(?:180(?:(?:\.0{1,8})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,8})?))$/';
// 
//         if (preg_match($latitude_regx, $latitude)) {
//             if (preg_match($longitude_regx, $longitude)) {

/***************************************** Practice 19 *****************************************/
let wait = (time) => new Promise(function(resolves, rejects){
    setTimeout(resolves("resolved"), time);
});

wait(1000).then((m)=>console.log(m));
/***************************************** Practice 20 *****************************************/
/***************************************** Practice 21 *****************************************/
/***************************************** Practice 22 *****************************************/
/***************************************** Practice 23 *****************************************/
/***************************************** Practice 24 *****************************************/
/***************************************** Practice 25 *****************************************/
/***************************************** Practice 26 *****************************************/
