// //Question
// Palindromic Substring
// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7


// 1 solutioion with brute force methored 

function masaiPalSubString(s){
    //write code here
      var arr = [];var len = 0;
  for (var i = 0; i < s.length; i++) {
      for ( var j = i + 1; j < s.length + 1; j++) {
          arr.push(s.slice(i, j));
      }
     }
    // console.log(arr)
  for(var k = 0; k<arr.length; k++) {
      var x = arr[k].split("").reverse().join("");
      //console.log(x);
        if(x == arr[k]){
          if(len < arr[k].length){
              len = arr[k].length;
            }
        }
        
  }
  console.log(len);
}

// 2 Solution
// Dynamic Programming based solution.



