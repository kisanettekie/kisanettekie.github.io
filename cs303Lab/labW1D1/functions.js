 "use strict";


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    let max=a;
    if(max<b){
        max=b
    }
   if(max<c){
       max=c;
   }
    
    return max;
}
console.log(maxOfThree(3,4,-6));

// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} sum of arr numbers
//  */
// function sum(arr){
//     let tot = 0;
//     for(let i=0; i<arr.length;i++){
//         tot+=arr[i];
    
//     }
   
//     return tot;
// }
// console.log(sum([1,2,3,4]))

// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} sum of arr numbers
//  */
// function multiply(arr){
//     let tot = 1;
//     for(let i=0; i<arr.length;i++){
//         tot*=arr[i];
//     }
//     return tot;

// }
// console.log(multiply([1,2,3,4]))


function findLongestWord(str){
    let longest;
    
    for(let i=0; i<str.length;i++){
        for(let j=0; j<str[i].length;j++){
            if(str[j]<str[j+1]){
                return longest= str[j+1]
            }
            else if(str[j]>str[j+1]){
                return longest=str[j]
            }
            else{
               return longest=str[j];
            }

        }
        return longest[j];
    }
    
}

console.log(findLongestWord(["kisan", "kisanet", "kisanettt"]));

module.exports={maxOfThree,findLongestWord};
    


