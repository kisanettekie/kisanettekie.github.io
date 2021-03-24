
// let from = "Ann";
// function showMessage(from, text) {
//     from = '*' + from + '*'; // make "from" look nicer
//     console.log(from + ': ' + text);
   
//     }
//     console.log(from);
//     showMessage(from, "Hello"); // *Ann*: Hello
//     // the value of "from" is the same, the function modified a local copy
//     // this is called ‘shadowing’, best to avoid shadowing for clarity
//     console.log(from);

// function sayHi() {
//     console.log( "Hello" );
//     }
//     //const myHi = sayHi();
//     console.log( sayHi() ); // shows the function code
//     function higherOrder() {
//          return sayHi;
//          }
//     //higherOrder()();


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else {no()};
//     }
//     ask( "Do you agree?",
//     function() { console.log("You agreed."); },
//     function() { console.log("You canceled the execution.");},)

// const prompt= require('prompt-sync')();
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
// [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// console.log( bag.apple ); // 5 if fruit="apple“


// let x = {age:5};
// let y = {x};
// console.log(y); 

// let obj = {
//     test: undefined
//     };
//     console.log( obj.test ); // it's undefined, so - no such property?
//     console.log( "test" in obj );  //true

//     let obj = {
//         test: null
//         };
//         console.log( obj.test ); // null
//         console.log( "test" in obj );  //true


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//     };
//     for (let key in user) {
//     // keys
//     //console.log( key ); // name, age, isAdmin
//     // values for the keys
//     console.log( user[key] ); // John, 30, true
//     }

// let pt1 = {x:1 , y:2};
// let pt2 = {x:1 , y:2}; // two independent objects
// console.log( pt1 == pt2); // ?? false 
// console.log(pt1 === pt2) // ?? false

// const user = {
//     name: "John"
//     };
//     user.age = 25; // (*)
//     console.log(user.age); // 25
//     user.name = "Fred";
//     console.log(user.name); //’Fred’

// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//     // "this" is the "current object"
//     console.log(this);
//     }
//     };
//     user.sayHi(); // John

// function sayHi() 
// {
//     console.log("Hi");
// } 
// console.log(sayHi());

// let age = 10; 
// console.log(age);
//  function output(){ 
//      let age = 20; 
//     console.log(age);
// } 
// output(); 
// console.log(age);


// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // for each item of arr
//       partialSum += item; // add it to partialSum
//       maxSum = Math.max(maxSum, partialSum); // remember the maximum
//       if (partialSum < 0) partialSum = 0; // zero if negative
//     }
  
//     return maxSum;
//   }
//   console.log( getMaxSubSum([100, -9, 2, -3, 5]) );

// let student1={
//     studentId: "s101",
//     quizAnswer: [1,1,2,4]
    
// };

// let student2={
//     studentId: "s102",
//     quizAnswer: [2,1,2,2]

    
// };

// let student3={
//     studentId: "s103",
//     quizAnswer: [3,1,3,4]
// };

// const key=[3,1,3,4]
// const quiz=[]
// quiz.push(student1);
// quiz.push(student2);
// quiz.push(student3);
// console.log(quiz);
// /**
//  * 
//  * @param {Array} quizArray of student object
//  * @param {Array} keyArray of correct answers
//  * @returns {Object} report object with student scores
//  */


// function gradeqUIZ(quizArray,keyArray){
//     const report={};
//     for(const student of quizArray){
//         const score= scoreQuiz(student.quizAnswer,keyArray);
//         report[student.studentId]=score;   //using computer notation 
//     }
//     return report;
// }

// function scoreQuiz(stuAnswer,key){
//     return 10;

// }

// console.log("expect {s101:3, s102:2, s103:3}", gradeQuiz(quiz,key));

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//     };

//     for (let key in user) {
       
//         console.log( key ); 
//     }



// function sayHi() { 
//     console.log("Hi");
// }
// console.log(sayHi);   
// console.log(sayHi());  

// func1 = sayHi;   
// func2 = sayHi();  
// console.log(func1);  
// console.log(func1());  
//  console.log(func2);   
//  myArray = [func1, func1()];  
//  console.log(myArray[0]);  
//  console.log(myArray[0]()); 
//  console.log(myArray[1]);  
//  console.log(myArray[1]()); 
// console.log(func2()); 

// let obj = {
//     myProp,
//     };
//     console.log( obj. myProp ); // it's undefined, so - no such property?
//     console.log( " myProp" in obj ); 


// let start = 0;
//   function someFun(num) {
//    let jordan = 23;
//    if (num >= 0) {
//    num = Math.sqrt(num)
//  }
//  start = jordan + num;
//  console.log(num + "  " + start); //____10   33_____________
// return num;
// }
//  console.log(start); //____0________________
//  console.log(someFun(100)); //______10_______________
//  console.log(start); //______33_____________
//  //console.log(jordan); //______________________


// let start=0;
// function someFun() {
//     start= 10

//     return start;
// }
// console.log(start);
// someFun()
// console.log(start);


// let age = 10; 
// console.log(age);   //10 
// function output() { 
//     let age = 20; 
//     console.log(age); //20
// } 
// output(); 
// console.log(age); //10



// let age = 10; 
// console.log(age);   //10 
// function output() { 
//     age = 20; 
//     console.log(age); //20
// } 
// output(); 
// console.log(age); //20

// function sayHi() {
//     console.log("Hi");
// } 
// console.log(sayHi());

// let myObj = {
//     myArray: [1, 2, 3],
//     anotherArray: [1, 2, 3],
//      equals: function() {
//      return this.myArray === this.anotherArray;
//      }
//     }
//     console.log(myObj.equals()); // ______________false______________________

// const x = 10;
// const  y = x;
// y = 100;
// console.log(x); //___10_
// console.log(y); //____can't assign to constatnt variable ____


// const x = 10;
// let  y = x;
// y = 100;
// console.log(x); //___10_____
// console.log(y); //___100________

//const x = console.log("hi");

// let myArray=[1,2,3,4];
// let anotherArray=[10,11,12,13]
// console.log(myArray[0]); //_______1____________________
// myArray=anotherArray;
// console.log(myArray[0]); //__________10_________________
// console.log(myArray.length); //_____4_____________________


// function hi(name){
//     return 'Hi ' + name;
// }
// let goodBye= function(){
//     return 'Good Bye';
// }
// console.log(hi('Developer','Welcome')); //_______Hi Developer_________________
// console.log(goodBye('Developer')); //_________Good Bye_______________
// console.log(goodBye);// _____[Function: goodBye]_________________
// console.log(goodBye()); //_______Good Bye__________________


// let color='red';
// let myObject={
// color : 'blue',
// printColor:function(){
// console.log(color);
// }
// }

// myObject.printColor(); //  red


// const x = {a: 10, b: 20, c:30}
// const y = x;
// y.c = 300;
// y.d = 400;
// console.log(x.c); //________300____________
// console.log(x.d); //____400________________
// console.log(y === x); //______true_____________


// function checkAge(age) {
//     if (age > 18) {
//     return true;
// } else {
//     console.log("Age is less than 18");
    
//     }
//    }
//    //const z = checkAge(19);
//    const w = checkAge(18);
//    //console.log(z);
//    console.log(w);


//    // value of z: true
//    // value of w: 


// function getQuote() {
    
//     return 
//     "this is a really long quote and therefore I want it to be on it’s own line.";
//     }
//     const m = getQuote();   // undefined because the return is on top of 
                                // the string it should be on the same line


// let x=10;
// function sum(){
//      x=5;
//     console.log(x+4);
//     return x

// }
// console.log(x);
// sum()
// console.log(x)

// function getSix() { 
//     return 6;
// }
// const f1 = getSix();    
// const f2 = getSix;  
// const f3 = f1; 
// const f4 = f2();   
//const f5 = f1();  


// console.log(f1);  //6
//console.log(f2);    // Function : getSix 
// console.log(f3);   //6
//console.log(f4);   //6
//console.log(f5);     // f1 is not a function 

//calling sortThis(5, 2, 3) should return [2, 3, 5]

// function sortThis(a,b,c){
//     let result=[];
//     if(a>b && a>c){
//         result[2]=a;   
//     }
//     if(b>c){
//         result[0]=c;
//         result[1]=b
//     }
//     else{
//         result[0]=b;
//         result[1]=c
//     }
//     return result
// }
// console.log(sortThis(5,2,3));


//Write a function named somethingOdd that takes an array of numbers as input and
//returns the product of all the array values at the odd indices.

// function somethingOdd(arr){
//     let product=1;
    
//     for(let i=1; i<arr.length; i+=2){
//         product*=arr[i];
//     }
//     return product;

// }
// console.log(somethingOdd([1,2,3,4,5,6]))


// let obj1={
//     fname : "umur",
//     lname : "inan"
//     };
//     let obj2={
//     fname : "keith",
//     lname : "levi"
//     };

//     let array =[obj1,obj2];
//     for(const element of array){
//         console.log(element);
//     }
    

/*Write a function ‘thisProgramIsTheBest’ which takes 3 parameters. First two
parameters are objects that have property ‘color’ and the last one is a function, “cbFun”. If
the color properties are equal, then return “Same color!”, otherwise call the cbFun function
with the input parameters as arguments, and then return “Different colors”.
*/

// function thisProgramIsTheBest(obj1,obj2,cbFun){
//     if(obj1.color === obj2.color){
//         return "same color";
//     }
//     else{
//         cbFun(obj1,obj2)
//         return "different color";
//     }
// }

/*
Complete the code for an object, rectangle. It should have properties for length and
width. It should have methods to compute and return the area and the circumference.
*/

// const rectangle ={
//     length:5,
//     width:6,
//     area : function(){
//         return this.length * this.width

//     }
    
// };
// console.log(rectangle.area());

// const student1 = { studentId: "s101", quizAnswers: [1, 1, 2, 4] };
// const student2 = { studentId: "s102", quizAnswers: [2, 1, 2, 2] };
// const student3 = { studentId: "s103", quizAnswers: [3, 1, 3, 4] };
// const quiz = [];
// quiz.push(student1);
// quiz.push(student2);
// quiz.push(student3);

// function sumQuiz(arr){
//     let sum=0;
//     for(const val of arr){
//         sum+=val
//     }
//     return sum;
// }
// function getAverage(arr){
//     let sum=0

//     for(const element of arr){
//         sum+=sumQuiz(element.quizAnswers)
//     }
//     return(sum/arr.length)
// }
// console.log(getAverage(quiz));

// function myFunction() {
//     return this;
//   }
//   console.log(myFunction());

// "use strict";
// function myFunction() {
//   return this;
// }
// console.log(myFunction())

// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       return this;
//     }
//   };

//   console.log(person);




// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
//   person1.fullName.call(person2); 
//   console.log(person2);

// const a = 5;
// const b = 5;
// console.log(a === b);
// const a = {name: "John", age: 10};
// const b = {name: "John", age: 10};
// console.log(a === b);


// const a = {name: "John", age: 10};
// const b = a;
// b.name = "alex";
// b.age = 65;
// console.log(a === b);

// let baz = "" + 33 + 10;
// console.log(baz === 43);



// const a = {x: 5};
// a.x = 6;
// console.log(a.x);

// const a = {x : 5};
// a = {x : 6};
// console.log(a.x);


// const quiz=[];
// quiz.push(s101);
// quiz.push(s102);
// quiz.push(s103);

// function sumGrade(arr){
// let sum=0;
// for(let i=0;  i<arr.length; i++){
// sum+=arr[i];
// }
// return sum;


// function averageScore(arr){
// let sum1 = 0;

// for(const element of arr){
//       sum1+=sumGrade(element.gradeReport)
//      }
//     return(sum1/arr.length)
//  }
// }
//  console.log(averageScore(quiz));


let calculator= {
    value1:0,
    value2:0,
    getValue: function(operand1,operand2){
        this.value1= operand1;
        this.value2 = operand2;
    },
    sum: function(){
      const tot = this.value1 + this.value2; 
      return tot;
    },
    mult: function(){
        const product = this.value1 * this.value2; 
        return product;
    }
};
calculator.getValue(5, 10);
console.log( "expect 15 : ", calculator.sum() );
console.log("expect 50 : ", calculator.mult() );
