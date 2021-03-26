"use strict";

const { clear } = require("node:console");


module.exports={ucFirst, checkSpam,truncate,extractCurrencyValue,getMaxSubSum,camelize}
/**
  * @param {String} str 
  * @ return string return the first letter to upper case
  */

function ucFirst(str) {
    let firstChar= str.charAt(0).toUpperCase();
    let theRest= str.substr(1);
    return firstChar + theRest;

}
//console.log(ucFirst("kisanet"));

/**
 * 
 * @param {String} str 
 * @returns {boolean} true is spam contains spam, else false;
 */
function checkSpam(str){
    let low= str.toLowerCase();
   if(low.includes("viagra") || low.includes("free xxxxx")) { 
   return true;
}else{
    return false
}

}
// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));


 /**
  * @param {String} str
  * @param {Number} n
  *@returns {String} trancuated the string equal to the number n.
  *
  */

function truncate(str,n){
        
if(str.length<=20){ 
return str 
} 
str = str.slice(0,n-1)
return str.concat("…")
      }
//console.log(truncate("What I'd like to tell on this topic is:", 20))


 /**
  * @param {String} str
  * @returns {Number} 
 
 */
  function extractCurrencyValue(str){
    str= str.slice(1)
    return +str;
}
console.log(extractCurrencyValue('$120'))

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
 function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
  }
   //console.log(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]))

/**
 * 
 * @param {string} str 
 * @returns {string};
 */
 function camelize(str){
 
    let camel = false;
    let camelString = '';
   
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) === '-'){
        camel = true;
   
      } else if(camel) {
        camelString += str.charAt(i).toUpperCase();
        camel = false;
      } else {
        camelString += str.charAt(i);
      }
    } 
    return camelString;
  }
   

  //console.log(camelize("list-style-image"));