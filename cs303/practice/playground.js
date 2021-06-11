
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


// let calculator= {
//     value1:0,
//     value2:0,
//     getValue: function(operand1,operand2){
//         this.value1= operand1;
//         this.value2 = operand2;
//     },
//     sum: function(){
//       const tot = this.value1 + this.value2; 
//       return tot;
//     },
//     mult: function(){
//         const product = this.value1 * this.value2; 
//         return product;
//     }
// };
// calculator.getValue(5, 10);
// console.log( "expect 15 : ", calculator.sum() );
// console.log("expect 50 : ", calculator.mult() );


// function Person(firstName, lastName, age, eyeColor) {
//     this.firstName = firstName; 
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//       this.lastName = name;
//     };
//   }

 

//   let myFather = new Person("John", "Doe", 50, "blue");
// let myMother = new Person("Sally", "Rally", 48, "green");

//   let naming= new Person("kisa", "mae",28,"brown");
//   console.log(naming);
//   console.log(myMother.changeName("Doe"));

  
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step --;
//       return this;
//     },
//     showStep: function() { // shows the current step
//       console.log( this.step );
//       return this;
//     }
//   };

//   ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep()

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   function sayHi() {
//     console.log("Hello!");
//   };
//   user.sayHi = sayHi();
//   //user.sayHi(); // Hello!

// user = {
//     sayHi() { // same as "sayHi: function()"
//       console.log("Hello");
//     }
//   };
//   user = {
//     sayHi: function() {
//       alert("Hello");
//     }
//   };


// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" is the "current object"
//       console.log(this.name);
//       //console.log(this);  // it will print the whole object 

//     }
  
//   };
//   user.sayHi(); // John


// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       console.log(user.name ); // leads to an error
//     }
  
//   };
  
  
//   let admin = user;
//   user = null; // overwrite to make things obvious
  
//   admin.sayHi();

// let user = { name: "John" };
// let admin = { name: "Admin" };
// function sayHi() {
//     console.log( this.name );
//   }
//   console.log(sayHi());

//   user.f = sayHi;
// admin.f = sayHi;
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f']();



// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log( user.ref.name ); // What's the result?

// function BigUser() {

//     this.name = "John";
  
//     return {name:"me"};  // <-- returns this object
//   }
  
//   console.log( new BigUser().name );

// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       console.log( "My name is: " + this.name );
//     };
//   }
  
//   let john = new User("John");
  
//   john.sayHi(); // My name is: John


// function Accumulator(startingValue) {
//     this.value = startingValue;
  
//     this.read = function() {
//       this.value += +prompt('How much to add?', 0);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   console.log(accumulator.value);

// let brown= 10;
// function someFun(blue) {
//  let green= 108;
//  if (blue >= brown) {
//  blue = Math.sqrt(blue)
//  }
//  brown= green + blue;
//  console.log(blue + " " + green + " " + brown); 
//  return blue;
// }
// console.log(brown); //__________10____________
// console.log(someFun(36)); //_______6_______________
// console.log(brown); //_________114_____________
// console.log(green); //


// let myObj = {
//     user1: {
//    fname : "john",
//    lname : "doe"
//     },
//     user2: {
//    fname : "john",
//    lname : "doe"
//     },
//     equals: function() {
//     return this.user1 === this.user2;
//     }
//    }
//    console.log(myObj.equals());


// const arr = ["b","a", "C"];

// arr.sort();

// console.log(arr);


// function sayHi(){
    
//     console.log(this)  
// }
// sayHi();



// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//     // "this" is the "current object"
//      console.log(this.name);
    
//     }
//     };
//     user.sayHi(); // John

//["Bilbo", "Gandalf", "Nazgul"].forEach(function(character){console.log(character)} );

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => { console.log (`${item} is at index ${index} in ${array}`);
// });

// let arr = [2,2,6,4]; 
// function isEven(arr){
//     if(arr % 2 === 0){
//     console.log(arr)
    
//     }
   
// }


// const forE= arr.forEach(isEven);
// console.log(forE);



// function isEven(arr){
//     if(arr % 2 === 0){
//     console.log(arr)

//     }
// }
// // use filter to even numbers
//  const numbers= [1,5,18,2,77,108];
//  const newNum= numbers.filter(isEven);
//  //console.log(newNum);

//  // use find to find the first even numbers
// const first= numbers.find(isEven);
// //console.log(first);

// // use findIndex to find the first even numbers

// const findInd= numbers.findIndex(isEven);
// console.log(findInd);



// arr.push(user);
// arr.find(function(n){
//     console.log(n)
// });





//console.log(6.354.toFixed(1));

//console.log(0.2*10);

// let hike = "1043huthuthut"
// let what = parseFloat(hike,10);

// console.log(what);

// let num= +"5678";
// console.log(num === Number("5678"));


// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(function(item,index){
//     const newItem= "" + index + ": " + item.length;
//     return newItem;

// });
// console.log(lengths); 

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//     }
//     let arr = [ 1, 15, 2 ];
//     arr.sort(compareNumeric);
//     //console.log(arr); 

//     function descending(a,b){
//         return b - a;
//     }
//     let arr1= [ 1, 15, 2 ];
//     arr1.sort(descending);
//     console.log(arr1);


//   function descendingLex(a,b){
//       a= "" + a;
//       b= "" + b
//       if(a<b) return 1;
//       if(a==b) return 0;
//       if(a>b) return -1;

//   }
//     let arr2= [ 1, 15, 2 ];
//     arr2.sort(descendingLex);
//     console.log(arr2);
    
// // PRODUCT    
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce(function (product, current) { return product * current; }, 1);
// //console.log("Expect 120: ", result); //120



// let arr2 = [1, 2, 3, 4, 5];
// let result2 = arr.reduce(function (max, current) { return Math.max(max ,current); }, 0);
// console.log(result2);


//["Bilbo", "Gandalf", "Nazgul"].forEach(function(character){console.log(character)} );



//use map and an arrow function to get a new array with
// the squares of each element -- i.e., [1, 4, 9]

// const array123 = [1, 2, 3]

// WRONG
// let newArr= array123.map(element=> {element* element
//     return newArr;

// })
// console.log(newArr);


//Use reduce to get the sum of the elements of arr123.

// CORRECT
// let sumArr= array123.reduce((sum,current)=> {
// return sum +current
// },0)
//console.log(sumArr);

// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// console.log(name); // Julius (from array)
// console.log(surname); // Anonymous (default used)



// const team= [ "Bob", "Fred", "Jim"]
// const[bob,fred,jim]= team 

// console.log(bob);
// console.log(fred);
// console.log(jim);

//const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
// 1. destructure the team object onto variables with the same names as the properties


// let {point,shooting,power,small,center}= team

// console.log("expect Big Sleep", center);
// console.log("expect Jim", power);



//destructure the team onto variables: one (point guard), two (shooting guard), three (small
    // forward), four (power forward) and five (center)

    // const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
    // console.log("expect Jim: ", four);
    // console.log("expect Bob: ", one);


    // ({height:h, width:w, title:t} = { title: "Menu", height: 200, width: 100 })
    // console.log(h);
    // console.log(t);

    // let options = {
    //     title: "Menu"
    //     };
    //     let {width = 100, height = 200,title} = options;
    //     console.log(title); // Menu
    //     console.log(width); // 100
    //     console.log(height); // 200



// const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }

// const{point:one, shooting:two, small:three, power:four, center:five } = team;
// console.log("expect Jim: ", four);
// console.log("expect Bob: ", one);



// function circumference(r) {
//     if (isNaN(parseFloat(r))) {
//     return 0;
//     }
//     return parseFloat(r) * 2.0 * Math.PI;
//     }
//     console.log(circumference('4.567abcdefgh'));



// const foo = 45;   //number
// const bar = "" + foo;   // "45"    //string
// const bar2 = "" + 108;  // "108"   //string
// const bar3 = foo.toString();  
// const bar4 = 108..toString(); //need both periods after number
// const bar5 = foo + "";

// console.log(foo);   //45
// console.log(typeof(foo)); //number
// console.log(bar); // "45"  
// console.log(typeof(bar));  //string
// console.log(bar2);   //"108"
// console.log(typeof(bar2)); // string
// console.log(bar3);   // "45"
// console.log(typeof(bar3)); //string
// console.log(bar4);  //"108"
// console.log(typeof(bar4));  //string
// console.log(bar5); // "45"
// console.log(typeof(bar5)); // string

// console.log(typeof foo === "number"); //true
// console.log(typeof bar === "string"); //true
// console.log(typeof bar2 === "string"); //true
// console.log(typeof bar3 === "string"); //true
// console.log(typeof bar4 === "string"); //true
// console.log(typeof bar5 === "string"); //true




// function max(){
//     return("function declaration");
// }
// console.log(max());

// let max1 = function () {
//    return ("function expression")
// }
// console.log(max1());

// let min = a =>{
//     return a
// }
// console.log(min(2))


// let obj =[2,3,4,5,6]
// let names =["kisanet", "maekele" ,"tekie" ,"tekeste"]

// for(let p of names){
//     console.log(p.length);
// }

// let person ={
//     name: "kisa",
//     lastName: "tekie",
//     age : 28
// };

// let searchable = () => {
//     for(let key in person){
//       console.log(Object.keys(person))
//       return key

//     }
// }
// console.log(searchable(person));



// let message= "hello";
// let phrase =message;
// console.log(phrase); //hello
// message= "bye";
// console.log(message); //bye


// let obj ={name: "kisa"};
// let obj1={name: "kisa"};

// console.log(obj === obj1); // false
 
// let obj2 ={name: "kisa", age: 28};
// let obj3=obj2;

// console.log(obj2 === obj3); // true
// obj3.age=30;
// console.log(obj3);
// console.log(obj2 === obj3); //true


// const x= { num:5, j:8};
// x.num = 7; 
// console.log(x)
// delete x.num;
// console.log(x)


// let obj ={
//     name: "kisa",
//      lastName: "tekie",
//      age : 28, 
//     sayHi: function(){
//          return " hello " + this.name;
//      }
// };
// console.log(obj.sayHi());


// let calculator ={
//     value1: 0,
//     value2: 0,
//     getValue(op1,op2){
//         this.value1= op1;
//         this.value2=op2;
//     }, 
//     sum(){
//         const tot= this.value1 + this.value2;
//         return tot;
//     },
//     multi(){
//         const pro= this.value1 * this.value2;
//         return pro;

//     }

// };
// console.log(calculator.getValue(5,10));
// console.log(calculator.sum());
// console.log(calculator.multi());


// function Car(name, year, color){
//     this.name= name;
//     this.year= year;
//     this.color= color;
// }
// let toyota= new Car("yaris", 2007, "grey");
// let opel= new Car("vectra", 1999, "yellow"); 
// console.log(toyota);
// console.log(opel);


// function toUpper(str){
//     let first= str.charAt(0).toUpperCase()
//     let rest= str.substring(1);
//     return first + rest;
// }
// console.log(toUpper("kisanet"))


// function checkSpam(str){
//     let lowered= str.toLowerCase();

//     if(lowered.includes("kisanet") || lowered.includes("tekie")){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkSpam("saba"));
// console.log(checkSpam("kisanet"));
// console.log(checkSpam("TEKIE"));

// let num= "23.7";
// console.log(parseFloat(num));

// //console.log(+num);
// console.log(num.toFixed(3));

//let str= ["kisanet", "maekele", "tekie", "scuola", "italiana"];
// console.log(str.indexOf("a")); 
// console.log(str.includes("K"));
//console.log(str.slice(2,5));
//console.log(str.substr(2));
//console.log(str.substring(2,5));
//console.log(str.repeat(2));
//console.log(str.splice(1,2,"saba", "tesfamichael"));
//console.log(str);


// let arr= [1,2,3,4,5,6];
// arr.forEach(function(item,index, array ){
//     console.log("item " + item +" " + "index " + index + " of " + array);

// });

// arr.forEach(value=>
//     console.log(value)
// )

// let arr= [1,2,3,4,5,6];
// let findEven= arr.forEach(isEven(item));
// return findEven;

// function isEven(arr) {
   
//     if(arr%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// let user={
//     id: 1, name: "kisanet",
//     id: 2, name: "anet",
//     id: 3, name: "ninu",
//     id: 4, name4: "anita"
// };

// let fNames= user.filter(item=> item<3);
// console.log(fNames);

// let [firstName, surname] = "Ilya Kantor".split(" ");
// console.log(firstName);

// const arr1234 = [1, 2, 3, 4, 5];
// [a, b, ...c] = arr1234;

// console.log(a);
// console.log(...c);


/*
Write a function, myMap(arr, fun) that takes an array 
and a function as arguments and returns a new array
 that is formed by applying the function 
to each element of the array and saving the result in the new array.
*/

// function myMap(arr,fun){
//     let newArr=[];
//   comp= function(){
//         return newArr.push(arr);
//     }
//     return newArr;
// }
// console.log(myMap([2,3,4,5], comp()));


// let user = {
//     name: "John",
//     age: 30,
//     toString: function() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//     }
//     };
//     console.log(user); // {name: "John", age: 30}


// let userName= "john";

// function showMessage() {
// let userName = "Bob"; // (1) changed the outer variable
// let message = 'Hello, ' + userName;
// console.log(userName);   // bob
// }
// console.log(userName); //john
// showMessage();
// console.log(userName);  // john


// function showMessage(from, text) {
//     from = '*' + from + '*'; // make "from" look nicer
//     console.log(from + ': ' + text); // *ann* hello
//     }
//     let from = "Ann";
//     showMessage(from, "Hello")  //ann, hello 
//     console.log(from); //ann

// function sayHi() {
//     return ("Hello" );  
  
//     }
//     const myHi = sayHi();
//     //console.log(myHi);  // function
//     //console.log( sayHi() ); // shows the function code
//     function higherOrder() {
//         console.log(sayHi);    //function 
         
//         }
//     higherOrder();

// function declaration 
// function add(a,b){
//     return a+b;
// }
// // function expression 
// let adding = function(a,b){
//     return a+b;
// }

// // arrow function 
// // 2 param 
// let sum = (a,b) => {
//     return a+b;
// } 

// // 1 param 
// let summing = a => a;

//  // 0 param
  
//  let summmming= ()=> "nothing";

 


    
// let user = {
//     name: "John",
//     age: 30,
//     color: "black"
//     };
// const prompt = require("prompt-sync")();
// let key= prompt("what would u like to know", "name")
//     console.log(user[key]);

// const prompt = require("prompt-sync")();
// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {

// [fruit]: 5 // the name of the property is taken from the variable fruit
// };

// console.log( bag.apple ); // 5 if fruit="apple“

// let st1 = { stId: "s101", quizAnswer: [1,1,2,4]};
// let st2 = { stId: "s102", quizAnswer: [2,1,2,2]};
// let st3 = { stId: "s103", quizAnswer: [3,1,3,4]};

// let quiz=[];
// quiz.push(st1);
// quiz.push(st2);
// quiz.push(st3);
// let gradeQuiz= [3,1,2,4];
// function sumQuiz(arr){
//     let sum =0;
// for(const element of arr){
//     sum+=element   
// }
// return sum;
// }
// function averageScore(arr){
//     let sum = 0;
//     for(const element of arr){
//         sum+=sumQuiz(element.quizAnswer);
//     }
//     return sum/arr.length;
// }
// console.log(averageScore(quiz));


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//     };

//     for(const ele in user){
//         console.log(ele);
//     }


// let arr =[1,2,3,4,5,6];
// for (const ele in arr){
//     console.log(arr[ele]);
// }

// let calculator ={
//     value1: 0,
//     value2: 0,
//     getValue(op1,op2){
//         this.value1=op1;
//         this.value2=op2;
//     }, 
//     sum(){
//         let tot= this.value1 + this.value2;
//         return  tot ;
//     },
//     product(){
//       let pro= this.value1 * this.value2;
//         return pro;
//     }
// };
// calculator.getValue(5,10);
// console.log(calculator.sum());
// console.log(calculator.product());



// let arr=[2,3,4,5,7,8,3,5]

// let forE= arr.forEach(isEven(arr));
// console.log(forE);

// function isEven(arr){
    
//     if(arr % 2 === 0){
//         console.log(arr)
//     }
// }
// console.log(isEven(arr));


// let bob = 10; 
// function bill(bob, jim){
//     jim= bob*2;
//     return jim;
// }
// let jim =bob*2;
// console.log(jim)  // 20
// console.log(bill(jim,bob));  

// function square(value){
//     return value * value
//     }
 
    
//     function cube(value){
//     return value * value * value
//     }

//     function squreOrCube(value,square,cube){
//         if(value<10){
//             return square(value)
//         }
//         else{
//             return cube(value)
//         }
        
//     }

//     console.log(squreOrCube(10,square,cube));
//     console.log(squreOrCube(9,square,cube));
    

//console.log(23 === parseInt("23abc"));

// let counter = {

//     count: 0,
//     inc(){this.count++},
//     dec(){this.count--},
//     showCount: function(){console.log(this.count)}
    
//     };
    
//     console.log(counter.inc())
//     console.log(counter.dec());
//     console.log(counter.inc())
//     console.log(counter.showCount())


// function findLongestWord(arr){
//     let longWord = '';
//     let sum=0
//     for(let word of arr){
//     if(word.length>longWord.length){
//    sum+= word.length;
//     }
//     }
//     let average= sum/arr.length;
//     return average;

//     }
 
//     console.log(findLongestWord(['Simon Kiflay Solomon', 'abrish', 'kiflay the great', 'sam']))


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//     ];
//     let sum=0;
    
//     let x=function(){for(let i=0; i<matrix.length ; i++){
//         for(let j=0; j<matrix[i] ; j++){
//             sum+=matrix[i][j];
//                 };
//                 return sum

//     }
// }
//     console.log(x);



    // for(const element of matrix){
    //     for(const n of element){
    //         sum+=n
    //     }
    // }


    // const matrix = [        // sum 1,4,7 : 2,5,8 :  3,6,9
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    //     ];


    //     let x=function(){for(let i=0; i<matrix.length ; i++){

    //                 for(let j=0; j<matrix[i] ; j++){
    //                     sum+=matrix[i][0];
    //                         };
    //                         return sum
            
    //             }
    //         }



// let start = 0;
// function someFun(num) {
//  let jordan = 23;
//  if (num >= 0) {
//  num = Math.sqrt(num)
//  }
//  start = jordan + num;
//  console.log(num + " " + Jordan + " " + start); //___10____undefined_______33________
// return num;
// }
// console.log(start); //____0__________________
// console.log(someFun(100)); //__10____________________
// console.log(start); // ____undefined__________________
// console.log(jordan); //_undefined_____________________

// function pow(x, n) {

//     if (n == 1) {
 
//          return x;
 
//        } else {
 
//             return x * pow(x, n - 1);
 
//      }
 
//  }
 
// console.log( pow(2, 0) );



/*
myMap function here. It should take an array and a callback function as arguments. 
It should return a new array without changing the old one. 
The new array has the callback applied to each element. DO NOT use Array.map.
Then, look for the myreduce.js file in 303Demos / w2d3higherOrder 
and see if your myMap and myReduce will work with the skeleton code there.
*/

// function myMap(arr,fn) {​​​​​​​​​
// let myArray = [];
 
// for (let i = 0; i < arr.length; i++) {​​​​​​​​​​​​​​​​
// constresult =fn(arr[i], i, arr);
// myArray.push(result);
//   }​​​​​​​​​​​​​​​​
// returnmyArray;
// }​​​​​​​​​​​​​​​​
// myMap(arr, num=>Math.pow(num, 2));

// function factorial(num){
//     if(num === 1){
//         return 1;
//     }
//     else{
//         return num* factorial(num-1)
//     }
// }
// console.log(factorial(5));






// function countLetters(str,letter){
//     //base case
//     if(str.length === 0){
//         return 0;
//     }else{
//         //reduction step
//         //check if the first letter in string is the letter
//         if(str[0] === letter){
//             return 1 + countLetters(str.substring(1),letter)
//         }else{
//             return countLetters(str.substring(1),letter)
//         }

//     }
// }
// console.log(countLetters("abcabc", "a"));




// const arr = [1,2,3,4,5];
// /**
//  * 
//  * @param {Array} arr to be processed
//  * @param {*} cbk to map the elements
//  * @returns {Array} of mapped elements
//  * make a new array
//  * loop through arr
//  *  - call cbk (eachElement) and get return value and push it into new array
//  */
// function myMap(arr, cbk){

//     let myArray = [];
     
//     for (const element of arr) {​​​​​​​​​​​​​​​​
//     cbk(element);
//     myArray.push(cbk(element));
//       }​​​​​​​​​​​​​​​​
//     return myArray;
//     }​​​​​​​​​​​​​​​​
//     //myMap(arr, num=>Math.pow(num, 2)); 

// const dblFun = num => num * 2;
// const squareFun = num => num * num;

// // console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
//  console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

// // console.log("expect [4, 16, 36, 64, 100] ", arr.map(squareFun));
//  console.log("expect [4, 16, 36, 64, 100] ", myMap(arr, squareFun));



//  /**
//  * 
//  * @param {Array} arr to be processed
//  * @param {Function} cbk callback
//  * @param {*} initialVal value for the reduction
//  * @returns {*} the reduction of the array
//  * go through the array, call cbk with accumulator and element
//  * return value of cbk becomes accumulator for next loop
//  */
// function myReduce(arr, cbk, initialVal){
//     let accumulator = initialVal; 
//     for(const element of arr){
//         accumulator= cbk(accumulator,element);
//     }
//     return accumulator;
//     }
    
//     const sumFun = (accum, val) => accum + val;
//     const mulFun = (accum, val) => accum * val;
    
    
//     console.log("expect: 15: ", arr.reduce(sumFun, 0));
//     console.log("expect: 15: ", myReduce(arr, sumFun, 0));
    
//     console.log("expect: 120: ", arr.reduce(mulFun, 1));
//     console.log("expect: 120: ", myReduce(arr, mulFun, 1));


//     // DO myFilter and myFind




// const manager = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer"
//   };
//   const intern= {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern"
//   };
  
//   /**
//    * @returns {undefined} 
//    */
//   function sayHi() {
//   let result= "Hello, my name is " + this.name + ". I am " + this.age + " my job is " + this.job; 
//    console.log(result); 
//    return result;
//   }
  
//   // add sayHi function to both objects
//   manager.sayHi = sayHi;
//   intern.sayHi = sayHi;
  
//   manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
//   intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'


//"use strict";  
/* eslint-disable */

// /**
//  * @returns {undefined}
//  */
//  function sayHi() {
//     this.lat = 41.00;
//     this.long = -92.96;
//     console.log(this);
//   }

//   sayHi(); // undefined
//   console.log(lat);



// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 1600
//     }],
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };

// let name = "John";
// function sayHi() {
// console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); 

// function makeWorker() {
//   let name = "John";
//   return function() {
//   console.log(name);
//   };
//   }
//   let name = "Pete";
//   // create a function
//   let work = makeWorker();
//   // call it
//   work();

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// let add5 = makeAdder(5);
// let add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12


// function a() {
//   console.log(x); // consult
//   //Global for x and print 20
//   //from Global
//   }
//   function b() {
//   const x = 10;
//   a(); // consult Global for a
//   }
//   const x = 20;
//   b();

  // function b() {
  //   function a() {
  //   console.log(x);
  //   }
  //   const x = 10;
  //   a();
  //   }
  //   const x = 20;
  //   b();

  // function makeWorker()

  // { let name = "Pete";
  //     return function() { console.log(name); }
  // }
  //  let name = "John";
  
  // // create a function
  
  // let work = makeWorker();
  
  // // call it
  
  // work(); // what will it show?


//   function makeCounter(){
//     let count=0;
//     function increment(){
//      return count++;
//     }
//   return increment;

//   }
//   const counter1 = makeCounter();
//   const counter2 = makeCounter();
//   const counter3=makeCounter();
//  counter1();
//  counter1();
//  counter1();
//  counter2();
//  counter2();
//  counter3();
//  console.log("expect " , counter1()); // because we called the funtion twice, and 
//                                           // it prints 2
//  console.log("expect " , counter2()); // prints 1 because we called it ones
//  console.log("expect " , counter3());

// function b() {
//   function a() {
   
//   console.log(x);
//   }
//   a();
//   }
//   const x = 20;
//   b();

// function b() {
//   function a() {
//   console.log(x);
//   }
//   const x = 10;

//   a();
//   }
//   const x = 20;
 
//   b(); 

// function makeCounter() {
//   let count = 0;
//   return function() {
//   return count++;
//   };
//   }
//   let counter = makeCounter();
//   console.log( counter() ); // 0
//  console.log( counter() ); // 1
//  console.log( counter() ); // 2
  

// let company = {
  //     sales: [{
  //       name: 'John',
  //       salary: 1000
  //     }, {
  //       name: 'Alice',
  //       salary: 1600
  //     }],
  //     development: {
  //       sites: [{
  //         name: 'Peter',
  //         salary: 2000
  //       }, {
  //         name: 'Alex',
  //         salary: 1800
  //       }],
    
  //       internals: [{
  //         name: 'Jack',
  //         salary: 1300
  //       }]
  //     }
  //   };



  // "use strict";
  // function area(){
  //   console.log(this);
  //   return this.side * this.side;
  // }
  // const square1= {side:5,area:area};
  // console.log(square1.area());
  // console.log(JSON.stringify(area));

  // function makeWorker() { 
  //   let name = "John"; 
  // return function() {
  //   return name;
  // };
  // }
  // let name = "Pete";
  // let work = makeWorker();  // let work = function() {
  //                             // console.log(name);
  //                                       //};
  // console.log(work());

    // function makeCounter(){
    //     let count=0;
    //     function increment(){
    //      return count++;
    //     }
    //   return increment;
    //   }
    //   const counter1 = makeCounter();   // 1
    //   const counter2 = makeCounter();
    //   const counter3= makeCounter();
    //  counter1();   //1
    //  counter1();   //2
    //  counter1();   //3
    //  counter2();   //1
    //  counter2();  //2
    //  counter3();  //1
    //  console.log("expect counter 1: " , counter1()); // because we called the funtion twice, and 
    //                                           // it prints 2
    //  console.log("expect counter 2: " , counter2()); // prints 1 because we called it ones
    //  console.log("expect counter 3: " , counter3());

    // function makeCounter() {
    //   let count = 0;
      
    //   return function() {
    //   return count++;
    //   };
    //   }
    //   let counter = makeCounter();
    //   console.log( counter() ); // 0
    //   console.log( counter() ); // 1
    //   console.log( counter() ); // 2

    // function sayHiBye(firstName, lastName) {

    //   // helper nested function to use below
    //   function getFullName() {
    //     return firstName + " " + lastName;
    //   }
    
    //   console.log( "Hello, " + getFullName() );
    //   console.log( "Bye, " + getFullName() );
    
    //}

    // function f() {
    //   let value = Math.random();
    
    //   return function() { 
    //   return(value); 
        
    //   };
    // }
    
    // // 3 functions in array, every one of them links to Lexical Environment
    // // from the corresponding f() run
    // let arr = [f(), f(), f()];
    // console.log(arr);

// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   //console.log(user);

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// function sum(a) {

//   return function(b) {
//     return a + b; // takes "a" from the outer lexical environment
//   };

// }

// console.log( sum(1)(2) ); // 3
// console.log( sum(5)(-1) ); // 4

// let x = 1;

// function func() {

//   console.log(x); // ?

//   let x = 2;
// }

// console.log(func());

// function a() {
//   console.log(x);  // 20      // consult Global for x and print 20 from Global
//   }
//   function b() {
//     const x = 10;
// a();

//   }
//   const x=20;
//   b();

// function b() { 
//   function a() {
//   console.log(x); 
// }
//   const x = 10;
//   a(); 
// }
//   const x = 20;
//    b();


// function b() { 
//   function a() {
//   console.log(x);
//  }
//   a(); 
// }
//   const x = 20; 
//   b();


// function sayHi(phrase, who) {
//   console.log( phrase + ', ' + who );
//   }
//   setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier
// clearTimeout(timerId);
// console.log(timerId); // s

//setTimeout(() => console.log("Hello"), 0);
//console.log("World");

//"use strict"
// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// console.log(phrase)
// //console.log(user)   user is not defined

// sayHi();


// bank.BankBalance = function(){
//   const array = this.transactionDB;
//   let sum = 0;
//   for(const client of array){
//       const id = client.custID;
//       const clientBalance = this.getBalance(id);
//       sum += clientBalance;
//   }
//   return sum;
// }


// let x = 5
// function squared(a) {
//   let squaredValue = a * a
//   return squaredValue
// }
// let y = squared(x)
// console.log(y)

// let num = 3
// function foo(x) {
//   return x + num
// }
// console.log(foo());


// "use strict";

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  /* insert a node with value 3.5 after the node with value 3 */

  /* find node with value 3 */
  // let temp = list;
  // console.log("temp is : " , temp);
  // let node3 = null;   // assign
  // while (temp !== null){   //loop through the list to find the target node
  //     if (temp.value === 3){
  //         console.log("found node 3: ", temp);
  //         node3 = temp;
  //     }
  //     temp = temp.next;
  // }

  // const node3_5 = {value: 3.5, next:  null};

  // node3_5.next = node3.next;
  // node3.next = node3_5;

  //  console.log("new list: ", JSON.stringify(list));



  // const sum = a => b => a + b;

  // console.log(sum(1)(2)); //3

  // setTimeout(sayHi(), 3000); 
  // function sayHi(){console.log("hello")}


  
//let animal = { eats: true };
// function Rabbit(name) { 
//   this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit");

// const rabbit = { 
//   name: "White Rabbit",
//   __proto__:animal
// } 
// console.log( rabbit.eats ); // true



// function User(firstname, lastname, birthDate) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.birthDate = birthDate;
//   }
//   let user1 = new User('John', 'Smith', new Date('2000-10-01'));
//   let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
//   function getFullName() { return this.firstname + ' ' + this.lastname;}
//   function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}
//   //complete the code so that the above functions reside in a single object and are inherited by all User
//   //objects that are created using User as a constructor function.

//   User.prototype.getAge=getAge;
//   User.prototype.getFullName=getFullName;
  
//   console.log(user1.getFullName()); //John Smith
//   console.log(user1.getAge()); //21



// let animal = {
//   eats: true
//   };
//   function Dog(name) {
//   this.name = name;
//   }
//   Dog.prototype = animal;
  
//   let snoopy = new Dog("Snoopy");
//   snoopy.__proto__ == animal
//  console.log( snoopy.eats ); // true




// function makeCounter() {
//   let count = 0;
//   return function() { 
//     return count++; 
//   };
//   }
  /*
  Now modify makeCounter so that the callback it returns 
  accepts an argument for the increment value. It should also return 
  a warning string whenever it has been incremented by a value greater than 3. E.g.,
  */
  // const mycounter = makeCounter();
  
  // myCounter(10); //will return "Warning: increment was by value greater than 3"
  
  /*where x is the current count value as normal.
  
  Also, your counter should still handle the case where it is called 
  with no argument and increments by 1 as normal.
  */

  // function makeCounter() {
  //   let count = 0;
  //   return function() { 
  //     return count++; 
  //   };
  //   }

  //   function cbk(arg){
  //     let count=0;
  //     if(count >3){
  //       console.log("Warning: increment was by value greater than 3")
  //       return count;
  //     }
  //   }


  //   const myCounter = makeCounter();
  //   myCounter(10);


  // function User(firstName, lastName){
  //   this.firstName= firstName;
  //   this.lastName= lastName;
  // }
  // let user1= Object.create(User.prototype)
  // console.log(User);

//   function Calculator(n1, n2){
//     this.num1= n1;
//     this.num2= n2;
//   }
//   Calculator.prototype.add = function(){
//     return this.num1 + this.num2;
//   }
//   Calculator.prototype.sub = function(){
//     return this.num1 - this.num2;
//   }
//   Calculator.prototype.divide = function(){
//     return this.num1 / this.num2;
//   }
//   Calculator.prototype.multiply = function(){
//     return this.num1 * this.num2;
//   }
// const calc = new  Calculator(2,5);
// console.log(calc.add());

// let calc = Object.create(Calculator.prototype);
// calc.constructor(10,2);
// console.log(cal.add())


// let calc = new Calculator(10,2);

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // modifies rabbit.isSleeping
// rabbit.sleep();


//console.log(rabbit.isSleeping); // true
//console.log(animal.isSleeping); 

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log( rabbit.jumps ); // ? (1)  true

// delete rabbit.jumps;

// console.log( rabbit.jumps ); // ? (2) null

// delete animal.jumps;  null

// console.log( rabbit.jumps ); // ? (3) undefined 


// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__:head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__:table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed 
// };

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money)


// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// console.log(rabbit.eat());

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// console.log( lazy.stomach ); // apple


// let animal = {
//   eats: true

// };
// function Rabbit(name){
//   this.name = name;
// }
// Rabbit.prototype = animal;


// let rab = new Rabbit ("white");
// console.log(rab.eats);
// console.log(rab.name);


// function Rabbit(name){
//   this.name = name;
//   console.log(name);
// }
// let rabbit = new Rabbit("white one");
// let rab1 = new rabbit.constructor("yellow one");
// console.log(rabbit);
// console.log(rab1);

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log( rabbit.eats ); // ?  false

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();
// rabbit.eats= "yes";
// console.log(rabbit.eats)


// delete Rabbit.prototype.eats;

// console.log( rabbit.eats ); // ?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// console.log( rabbit.eats ); // ?


// function Rabbit(name) {
//   this.name = name;
//}
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
//};
//let fluf1= new Rabbit("Fluffy");
//fluf1.sayHi();
// Rabbit.prototype.sayHi();
// fluf1.__proto__.sayHi();

class User {
  constructor() {}
}

console.log(typeof User);
