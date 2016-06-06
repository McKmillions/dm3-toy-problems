/*
--------------
Next Problem (Wk2-Day 1)
--------------
*/

/*
 Write a function that takes in an array of numbers and determines whether those numbers are in order
 */


function ordered( arr ) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

//Nic
// function inOrder (array) {
//     var order = [];
//     for (var i = 0; i < array.length; i++){
//         if (array[i] < array[i+1]) {
//             order.push(array[i]);
//         }
//     }
//     if (array[array.length - 1] > array[array.length - 2]){
//         order.push(array[array.length - 1]);
//     }
//     if (order.length === array.length){
//     return true;
//     } else {
//     return false;
//     }
// }

// console.log(inOrder( [1, 2, 3, 7, 12] )); // true
// console.log(inOrder( [4, 9, 42, 22, 56] )); // false

//Shakib
// function isOrdered (array){
//  for(var i=0; i<array.length; i++){
//   if(array[i+1] < array[i]){
//      return false;
//   }
//  }
//  return true;
// }

// console.log(isOrdered( [1, 2, 3, 7, 12] )); // true
// console.log(isOrdered( [4, 9, 42, 22, 56] )); // false

//Dominic
function ordered ( array ) {
    for (var i = 0; i < array.length-1; i++)
        if (array[i] < array[i+1]) {
            console.log("True")
        } else {
            console.log("false")
        }
}

ordered ( [1, 2, 3, 7, 12] );
ordered ( [4, 9, 42, 22, 56] );


/*
--------------
Next Problem (Wk2-Day 2)
--------------
*/

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
*/

//my solution

function isIsogram(str){
  // Turn all letters of the string to lower case and split it into an array.
  var letters = str.toLowerCase().split('');
  var checkLetters = [];

   /* Check to see if the letter appears in the checkLetters array.
    If the letter is not already in the array it will push the letter into it. */
  letters.forEach(function(letter) {
   if(checkLetters.indexOf(letter) === -1) {
     checkLetters.push(letter);
//      console.log(checkLetters);
   }
 });
  /* Now we have two arrays. If the letters array has non-duplicate letters then
    it will be the same length as the checkLetters array. If not, the checkLetters array
    will be shorter. */

 /* Return true or false depending on whether the lengths of both arrays are equal */

 return letters.length === checkLetters.length ? true : false;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false // ignore letter case
console.log(isIsogram("you didnt even know"));
console.log(isIsogram("yes im down"));

//Nic's solution
function isIsogram(str){
    var cap = str.toUpperCase().split("");
    var check = [];
    cap.forEach(function(val){
        if(check.indexOf(val) === -1){
            check.push(val);
        }
    });
     if (check.length === cap.length){
         return true;
     }

    return false;
}

//Dominic's solution
var isogram = function( string ) {
    string = string.toLowerCase();
    var array = string.split('');
    var checked = [];

    for ( var i = 0; i < array.length; i++ ) {
        if ( checked.indexOf(array[i] ) < 0 ) {
            checked.push( array[i] );
        } else {
            return false;
        }
    }
    return true;
}

//Tony's solution
var isogram = function(str){
 str.toLowerCase();
 var arr = str.split("");
 var looped = [];

 for (var i = 0; i < arr.length; i++){
   if (looped.indexOf(arr[i]) < 0){
     looped.push(arr[i]);
   }
   else{
     return false;
   }
     return true;
 }

 /*
 --------------
 Next Problem (Wk2-Day 3)
 --------------
 */

 /*
we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
    square() must return a copy of the array, containing all values squared, the original array must not be changed
    cube() must return a copy of the array, containing all values cubed, the original array must not be changed
    average() must return the average of all array values, average() on an empty array must return NaN
    sum() must return the sum of all array values
    even() must return an array of all even numbers, the original array must not be changed
    odd() must return an array of all odd numbers, the original array must not be changed
var numbers = [1, 2, 3, 4, 5];
numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
*/

Array.prototype.square = function() {
    return this.map(function(item) {
        return Math.pow(item, 2);
    });
}

Array.prototype.cube = function() {
    return this.map(function(item) {
        return Math.pow(item, 3);
    });
}

Array.prototype.sum = function() {
    return this.reduce(function(pv, cur) {
        return pv + cur;
    });
}

Array.prototype.average = function() {
    if (this.length === 0) return NaN;

    return this.sum() / this.length;
}

Array.prototype.even = function() {
    return this.filter(function(item) {
        return item % 2 === 0;
    });
}

Array.prototype.odd = function() {
    return this.filter(function(item) {
        return item % 2 !== 0;
    });
}

//Nic's solution
// var numbers = [1, 2, 3, 4, 5];
//
// Array.prototype.square = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         answer.push(this[i] * this[i]);
//     }
//     return answer;
// };
// Array.prototype.cube = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         answer.push(this[i] * this[i] * this[i]);
//     }
//     return answer;
// };
// Array.prototype.average = function() {
//     var answer = 0;
//     for (var i = 0; i < this.length; i++) {
//         answer = answer + this[i];
//     }
//     return (answer / this.length);
// };
// Array.prototype.sum = function() {
//     var answer = 0;
//     for (var i = 0; i < this.length; i++) {
//         answer = answer + this[i];
//     }
//     return answer;
// };
// Array.prototype.even = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] % 2 === 0) {
//             answer.push(this[i]);
//         }
//     }
//     return answer;
// };
//
// Array.prototype.odd = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] % 2 !== 0) {
//             answer.push(this[i]);
//         }
//     }
//     return answer;
// };

//Dominic's solution
// var numbers = [1, 2, 3, 4, 5];
//
// Array.prototype.square = function() {
//     return this.map(function(n) {
//         return Math.pow(n, 2);
//     });
// };
//
// Array.prototype.cube = function() {
//     return this.map(function(n) {
//         return Math.pow(n, 3);
//     });
// };
//
// Array.prototype.sum = function () {
//     return this.reduce(function(a, b) {
//         return a + b;
//     }, 0);
// };
//
// Array.prototype.average = function() {
//     return this.sum() / this.length;
// };
//
// Array.prototype.even = function () {
//     return this.filter(function(item) {
//         return 0 === item % 2;
//     });
// };
//
// Array.prototype.odd = function () {
//     return this.filter(function(item) {
//         return 0 !== item % 2;
//     });
// };

// numbers.square();
// numbers.cube();
// numbers.sum();
// numbers.average();
// numbers.even();
// numbers.odd();



 /*
 --------------
 Next Problem (Wk2-Day 4)
 --------------
 */

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
c = "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
// 	var str1  = s1.split('');
// 	var str2 = s2.split('');
// 	var newArray = [];
// 	for(var i = 0; i < str1.length; i++){
// 		if(!newArray.includes(str1[i])){
// 			newArray.push(str1[i])
// 		}
// 	}
// 	for(var j = 0; j < str2.length; j++){
// 		if(!newArray.includes(str2[j])){
// 			newArray.push(str2[j])
// 		}
// 	}
// 	return newArray.sort().join('');
// }


// function longest(s1, s2) {
//   s3 = (s1 + s2).split("").sort().filter(function(element, index, array){
//     return element !== array[index - 1];
//   });
//   return s3.join("");
// }

function longest( s1, s2 ) {
    return ( s1 + s2 ).split( '' ).sort().filter( function( ele, index, arr ) {
        return ele !== arr[ index - 1 ];
    }).join( '' );
}

//Nic's
// function longest(str1, str2){
//     var arr1 = str1.split("");
//     var arr2 = str2.split("");
//     function unique(arr){
//         var noDups = [];
//         for (var i = 0; i < arr.length; i++){
//             if (noDups.indexOf(arr[i]) === -1){
//                 noDups.push(arr[i]);
//             }
//         }
//         return noDups;
//     }
//     var answer = unique(arr1);
//     var noDupsArr2 = unique(arr2);
//     for (var i = 0; i < noDupsArr2.length; i++){
//         if (answer.indexOf(noDupsArr2[i]) === -1){
//             answer.push(noDupsArr2[i]);
//         }
//     }
//     answer = answer.sort().join("");
//     return answer;
// }

//Shakib's
// var longest = function (str1, str2){
//  var combined = str1.split("").concat(str2.split(""));
//  var noDublicates = [];
//  for(var i=0; i<combined.length; i++){
//   if(noDublicates.indexOf(combined[i]) === -1){
//      noDublicates.push(combined[i]);
//   }
//  }
//  var allSorted = noDublicates.sort().join('');
//  return allSorted;
// };

console.log(longest(a, b)); // abcdefklmopqwxy
console.log(longest(b, c)); // abcdefghijklmnopqrstuvwxyz

/*
--------------
Next Problem (Wk3-Day 1)
--------------
*/

// function triangle() {
//     var txt = '#######'
//     for (var i = txt.length; i >= 0; i--){
//       console.log(txt.slice(i))
//     }
// }

// triangle();

function triangle(num) {
  var str = '';
  for (var i = num; i >= 1; i--) {
    str += '#';
    console.log(str);
  }
}

triangle(10);

//Shakib's
// function triangle(){
//  for(var i=1; i<=7; i++){
//   var numberOfHash = i;
//   var currLine = "";
//   while(numberOfHash !== 0){
//      currLine = currLine + "#";
//      numberOfHash = numberOfHash - 1;
//   }
//   console.log(currLine);
//  }
// }

//Nic's
// function triangle(){
//   var symbol = "######";
//   for(var i = 1; i < 7; i++)
//     console.log(symbol.slice(0, [i]));
// }

// triangle();

// Dominic's
// function makeTriangle() {
//     var triangle = '';
//     for (var i = 0; i < 7; i++) {
//         triangle = triangle + '#';
//         console.log(triangle);
//     }
// }

// makeTriangle();

/*
--------------
Next Problem (Wk3-Day 2)
--------------
*/

/*
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it.
The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.
*/
function add(num) {
  return num + 1
}
function mult(num) {
  return num * 30
}
chain(2, [add, mult]);
// returns 90;

// Mentors solution
// function chain(x, fns) {
//   return fns.reduce(function(x, fn) {
//     return fn(x)
//   }, x)
// }

//Shakib's
// function chain(start, arrOfFunc){
//  var curr = arrOfFunc[0](start);
//  for(var i=1; i<arrOfFunc.length; i++){
//     curr = arrOfFunc[i](curr);
//  }
//  return curr;
// }

// Nic's
// function chain(initialValue, array){
//   num = initialValue;
//   for(var i = 0; i < array.length; i++ ){
//     num = array[i](num);
//   }
//   return num;
// }

// Dominic's
function chain( val, funcs ) {
    for (var i = 0; i < funcs.length; i++) {
        val = funcs[i](val);
    }
    return val;
}

chain(2, [add, mult]) // 90

/*
--------------
Next Problem (Wk3-Day 3)
--------------
*/

/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.
Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true
*/

// Mentor's
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}

// function validParentheses(parens) {
// return ((parens.forEach() === "(") ? " true " : " false ");
// }

// Shakib's
// var validParentheses = function(parenStr){
//  var count = 0;
//  for (var i=0; i<parenStr.length; i++){
//   if(parenStr.charAt(i) === "("){
//      count = count + 1;
//   }else if(parenStr.charAt(i) === ")"){
//      count = count - 1;
//   }
//  }
//  if(count !== 0){
//   return false;
//  }return true;
// };

// Dominic's
// function validParentheses( str ) {
//     var i = 0;
//     var arr = [];

//     if ( !str.length ) {
//         return true;
//     }

//     if ( (str.length % 2) !== 0 ) {
//         return false;
//     }

//     while ( i < str.length ) {
//         if ( str[i] == "(" ) {
//             arr.push( str[i] );
//         } else if ( str[i] == ")" ) {
//             if ( arr.length ) {
//                 arr.pop();
//             } else {
//                 return false;
//             }
//         }
//         i++;
//     }
//     return true;
// }

// Nic's
// function validParentheses(str){
//     var check = [];
//     for(var i = 0; i < str.length; i++){
//         if(str[i] === "("){
//             check.push(i);
//         }else if (str[i] === ")"){
//             if (check.length){
//                 check.pop();
//             }else{
//                 return false;
//             }
//         }
//     }
//     if(check.length % 2 !== 0){
//       return false;
//     }
//     return true;
// }

console.log(validParentheses( "()" )); // returns true
console.log(validParentheses( ")(()))" )); // returns false
console.log(validParentheses( "(" )); // returns false
console.log(validParentheses( ")()(" )); // returns false
console.log(validParentheses( "(())((()())())" )); // returns true

/*
--------------
Next Problem (Wk3-Day 4)
--------------
*/

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

// Mentors
function humanReadable(seconds) {
  var hours = parseInt( seconds / 3600 ) ;
  var minutes = parseInt( seconds / 60 ) % 60;
  var seconds = seconds % 60;

  var pad = function(val){
    return val < 10 ? "0" + val : val;
  }

  return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// Nic's
// function humanReadable(sec){
//     var hours   = Math.floor(sec / 3600);
//     var minutes = Math.floor((sec - (hours * 3600)) / 60);
//     var seconds = sec - (hours * 3600) - (minutes * 60);

//     if (hours   < 10) {
//         hours   = "0"+hours;
//     }if (minutes < 10) {
//         minutes = "0"+minutes;
//     }if (seconds < 10) {
//         seconds = "0"+seconds;
//     }
//     return hours + ':' + minutes + ':' + seconds;
// }

// Cameron's
// function humanReadable(seconds) {
//  if (seconds > 359999) {
//   console.log('Too big!');
//  }
//  if (seconds <= 9) {
//   console.log('00:00:0' + seconds);
//  } else if (seconds <= 59) {
//   console.log('00:00:' + seconds);
//  } else if (seconds >= 60 && seconds <= 69) {
//   console.log('00:01:0' + (seconds - 60));
//  } else if (seconds >= 100 && seconds <= 109) {
//   console.log('00:01:' + (seconds- 60));
//  } else if (seconds >= 200 && seconds <= 209) {
//   console.log('00:02:' + (seconds- 160));
//  } else if (seconds >= 300 && seconds <= 309) {
//   console.log('00:03:' + (seconds- 260));
//  } else if (seconds >= 400 && seconds <= 409) {
//   console.log('00:04:' + (seconds- 360));
//  } else if (seconds >= 500 && seconds <= 509) {
//   console.log('00:05:' + (seconds- 460));
//  } else if (seconds >= 600 && seconds <= 609) {
//   console.log('00:06:' + (seconds- 560));
//  } else if (seconds >= 700 && seconds <= 709) {
//   console.log('00:07:' + (seconds- 660));
//  } else if (seconds >= 800 && seconds <= 809) {
//   console.log('00:08:' + (seconds- 760));
//  } else if (seconds >= 900 && seconds <= 909) {
//   console.log('00:09:' + (seconds- 860));
//  } else if (seconds >= 1000 && seconds <= 1010) {
//   console.log('00:10:' + (seconds- 960));
//  }


// }

// Shakib's
// var humanReadable = function (seconds){
//   var sec = 0;
//   var min = 0;
//   var hr = 0;

//   sec = seconds % 60;
//   min = parseInt((seconds / 60) % 60);
//   hr = parseInt( seconds / 3600 );

//   if(sec<10){
//     sec = "0"+sec;
//   }
//   if(min<10){
//     min = "0"+min;
//   }
//   if(hr<10){
//     hr = "0"+hr; // switch min to hr lol
//   }
//   console.log(hr + ":" + min + ":" + sec);
// };

// function humanReadable(sec){
//     var hours   = Math.floor(sec / 3600);
//     var minutes = Math.floor((sec - (hours * 3600)) / 60);
//     var seconds = sec - (hours * 3600) - (minutes * 60);

//     if (hours   < 10) {
//         hours   = "0"+hours;
//     }if (minutes < 10) {
//         minutes = "0"+minutes;
//     }if (seconds < 10) {
//         seconds = "0"+seconds;
//     }
//     return hours + ':' + minutes + ':' + seconds;
// }

// Dontavious
// function humanReadable(num) {
// 	var hours = num / 60;
// 	var rhours = Math.floor(hours);
// 	var minutes = (hours - rhours) * 60;
// 	var rminutes = Math.floor(minutes);
// 	var seconds = (minutes - rminutes) * 60;
// 	var rseconds = Math.floor(seconds);

// 	return rhours + ":" + rminutes + ":" + rseconds;
// }

// Rommel
//  var SS = 0;
//   var MM = 0;
//   var HH = 0;
// var time = function(seconds) {
//   do {
//     if (seconds >= 360) {
//       HH += 01;
//       seconds -= 360;
//     }
//   }
//   while (seconds >= 360);

//   do {
//     if (seconds >= 60) {
//       MM += 01;
//       seconds -= 60;
//     }
//   }
//   while (seconds >= 60);

//   if (seconds < 60) {
//     SS += seconds;
//   }
// };


console.log(humanReadable(0)) // '00:00:00'
console.log(humanReadable(5)) // '00:00:05'
console.log(humanReadable(60)) // '00:01:00'
console.log(humanReadable(86399)) // '23:59:59'
console.log(humanReadable(359999)) // '99:59:59'

/*
--------------
Next Problem (Wk4-Day 1)
--------------
*/

/*Write a new nestedFilter method on the Array prototype, it should work the same as filter,
but work on all nested arrays within the initial array.*/

Array.prototype.nestedFilter = function( cb ) {
  let ret = [];
  for ( let i = 0; i < this.length; i++ ) {
    if ( Array.isArray(this[i]) ) {
      ret.push(this[i].nestedFilter( cb ));
    } else {
      if ( cb( this[i], i, this ) ) {
        ret.push(this[i]);
      }
    }
  }
  return ret;
}

console.log([false, true, [true, false, false], true].nestedFilter( item => item )); // returns [true, [true], true]
console.log([2, 4, 8, 7, [9, 12, 13, 99, [87, 64, 3022]]].nestedFilter( item => item % 2 === 0)); // returns [2, 4, 8, [12, [64, 3022]]]
