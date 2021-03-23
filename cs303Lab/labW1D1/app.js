"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */ 
//module.exports = {maxOfThree, sum, multiply };  //add all of your function names here that you need for the node 
//exports.maxOfThree = maxOfThree;


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if (a > b && b > c) {return a;}
    if (a > c && c > b) {return a;}
    if (b > a && b > c) {return b;}
    if (b > c && b > c) {return b;}
    if (c > a && a > b) {return c;}
    if (c > b && b > a) {return c;}

 
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const element of arr){
        tot += element;
    }

    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for (const element of arr){
        tot *= element;
    }
    return tot;

}

/**
 * 
 * @param {Array} str of string
 * @returns {number} length of the longest string
 * 
 */

function findLongestWord(str){
    
    let longest=0;
    let newLong="";
    for(const element of str){
       if(element.length>longest){
           longest= element.length;
           newLong=element;

       }
    }
    return newLong;
    }
    //console.log(findLongestWord(["this", "is", "a", "test", "longest"]));
   // console.log(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]));


    function reverseArray(arr){
    let newArr=[];
    let arrLength = arr.length-1
    for(let i=0; i<=arrLength;i++){
        newArr.push(arr.pop());

    }
    return newArr;
        
    }
    //console.log(reverseArray(["A", "B", "C"]));
    

    function reverseArrayInPlace(arr){
        let newArr=[];
        let arrLength = arr.length-1
        for(let i=0; i<=arrLength;i++){
            newArr.push(arr.pop());
    
        }
        return newArr;
            
        }
        //console.log(reverseArrayInPlace(["A", "B", "C", "D"]));



        function scoreExams(studentAnswer,correctAnswers){
            let score=[]
            for(let eachAnswer of studentAnswer ){
            let answer=0
            for(let i=0;i<eachAnswer.length;i++){
            if(eachAnswer[i]===correctAnswers[i])
            answer++; 
             }
            score.push(answer)
             }
            return score;
            }
       
