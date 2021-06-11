// let start = 0;
// function someFun(num) {
//  let jordan = 23;
//  if (num >= 0) {
//  num = Math.sqrt(num)
//  }
//  start = jordan + num;
//  console.log(num + " " + jordan + " " + start); //___10____23_______33________
// return num;
// }
// console.log(start); //____0__________________
// console.log(someFun(100)); //______________________
// console.log(start); // ____33__________________
// console.log(jordan); //_reference error____________________


//What is the output of the code ?

// let myObj = {
// myArray: [1, 2, 3],
// anotherArray: [1, 2, 3],
//  equals: function() {
//  return this.myArray === this.anotherArray;
//  }
// }
// console.log(myObj.equals());   // false

// const x = 10;
// const y = x;
// y = 100;
// console.log(x); //___error__________



// let myArray=[1,2,3,4];
// let anotherArray=[10,11,12,13]
// console.log(myArray[0]); //___1________________________
// myArray=anotherArray;
// console.log(myArray[0]); //___10________________________
// console.log(myArray.length); //__4___________________

// function hi(name){
//     return 'Hi ' + name;
// }
// let goodBye= function(){
//     return 'Good Bye';
// }
// console.log(hi('Developer','Welcome')); // _______Hi Developer__________________
// console.log(goodBye('Developer')); //__Good Bye _______________________
// console.log(goodBye); //____Function : goodBye_____________________
// console.log(goodBye()); //_____Good Bye____________________


// let color='red';
// let myObject={
// color : 'blue',
// printColor:function(){
// console.log(color);
// }
// }
// myObject.printColor(); //__red__________________

// const x = {a: 10, b: 20, c:30}
// const y = x;
// y.c = 300;
// y.d = 400;
// console.log(x.c); //_______300_____________
// console.log(x.d); //_______400_____________
// console.log(y === x); //_____true_______________


// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//     console.log("Age is less than 18");
//     }
//    }
   
//    const z = checkAge(19);
//    const w = checkAge(18);
  // What is the value of z? ___true______________
  // What is the value of w? ___"Age is less than 18"_______



//   function getQuote() {
//     return
//     "this is a really long quote and therefore I want it to be on it’s own line."
//     }
//     const m = getQuote();
//     //What is the value of m? ___undefined_________________


// function getSix() { 
//     return 6;
// }
// const f1 = getSix();
// const f2 = getSix;
// const f3 = f1;
// const f4 = f2();
// const f5 = f1();
// What is the value of f1? ____6__________
// What is the value of f2? ____Function: getSix__________
// What is the value of f3? ____6__________
// What is the value of f4? _____6__________
// What is the value of f5? _____error_________


// function sortThis(a,b,c){
//     let newArr=[];
//     if(a>b && a>c){
//         newArr[2]=a 
//     }
//     if(b>c){
//         newArr[0]=c;
//         newArr[1]=b;

//     }else{
//         newArr[1]=c;
//         newArr[0]=b;
//     }
//     return newArr
//     }
    
//     console.log(sortThis(5,2,3));

// function somethingOdd(arr){
//     let product=1;
//     for(let i=1; i<arr.length;i+=2){
//         product*=arr[i];
//     }
//     return product;
// }
// console.log(somethingOdd([1,2,3,4]));

// let student1 ={
//     fName: "Kisanet",
//     lName: "Tekie"
// };

// let student2 ={
//     fName: "Simon",
//     lName: "Tombosa"
// };

// let arr=[student1,student2];

// let print= arr.forEach(function(value,index){
//     console.log(value.fName + "  -  " + value.lName + "  -  " + index)

// });


// function multiplyAll(array){
//     return array.reduce((result,value)=> result*value,1);
//     }

// function program(obj1, obj2, fun){
//     if(obj1.color === obj2.color){
//         return "same color";
//     }else{
//     fun(obj1,obj2)
//         return "different"
//     }
// }



// let rectangel ={
//     length: 5,
//     width: 6,
//     area: function (){
//         return this.length * this.width;
//     }
// };
// console.log(rectangel.area());


// describe("test multiplication", function(){
//     it("parameters 2,3", function(){
//         assert.strictEqual(mult(2,3),6);
//     });
//     it("parameters 4,5", function(){
//         assert.strictEqual(mult(4,5),20);
//     });
// });


// let array =[-10, 10, 20, -20, -10, 30]
// let returnVal= array.filter(positive);
// console.log(returnVal); // [10, 20, 30]
// console.log(array); // ____________
// function positive(value){
// if (value > 0) return true;
// }


// function check(correct,answer){
//     let result=[];
//     for(let i=0; i<correct.length ; i++){
//         if(correct[i] === answer[i]){
//             return result+=4
//         }
//         else{
//             return result -=1
//         }
//     }
//     return result<0 ? 0: result;
// }
// console.log(check(["a", "a", "b", "b"], ["a", "c", "b", "d"]));

// let anotherObject = {color: "green"};

// let color='red';

// let myObject={
// anotherObject :{color: 'blue'},
// printColor:function(){
// console.log(this.anotherObject.color);
// }
// }
// myObject.printColor(); // blue


// let brown= 10;// 114
// function someFun(blue) {//36 
//  let green= 108;
//  if (blue >= brown) {
//  blue = Math.sqrt(blue) //6
//  }
//  brown= green + blue;// 114
//  console.log(blue + " " + green + " " + brown); //_6 108 114_
//  return blue;
// }

// console.log(brown); //__________10____________
// console.log(someFun(36)); //_______6_______________
// console.log(brown); //_________114_____________
// console.log(green); //_____Reference Error___________


// function doubleNums(arr) {
//     return arr.map(num => num * 2);
// }
// console.log(doubleNums([1,2,3,4]))
// function filterEven(arr) {

//     const result = arr.filter(num => num % 2 === 0);
//     return result;
// }
// console.log(filterEven([1,2,3,4]));

// function filterOver10(arr) {
//     let result = arr.filter(user => ({ name: user.name, age: user.age > 10 }));
//     return result;
// }
// let user={
//     name: "kisan",
//     age: 5
// };


// console.log(filterOver10(user))

// function sayHi(){
//     console.log('hello');
//    return function() {
//    console.log('bye')
// }
// }
// setTimeout(sayHi(), 2000);

// function naming(arr){
// let john = {name: "John", surname:"Smith", age:"10"};
// let pete = {name: "Pete", surname:"Hunt", age:"20"};
// let people = [john, pete];
// //Use the map function to map the people array to the following:
// // [{fullName: "John Smith", age: "10"}, 
// // {fullName: "Pete Hunt", age:"20"}]

// let result = people.map(function(element, age ){
//     return result= this.name + this.age;
// })

// }
// console.log(naming());


// function foo(a,b){
//     console.log(a)
//     console.log(b)
// }
// foo(1);
// const a= 5;
// const b=6;

// foo();
// foo(1,2,3,4)

// function Dog(name){
//    this.name = name;
//   this.walk = function(){
//   console.log(this.name + ' is walking . . ');

// }
// }
// let myDog = Dog('Candy'); 
// myDog.walk();

// function checkPali(str){
//   if(str === ""){
//     return 0;
//   }
//   else{
//     for (let i=0 ; i<str.length; i++){
//       if(str[i] === str.length){
//         return true;
//       }
//       else{
//         return false;
//       }
//     }
//   }
// return str;
// }
// console.log(checkPali("kisanet"));
// console.log(checkPali("madam"));

// head ={value:10,next:node1};
//   node1= {value:50, next:null};

//   head ={value:5, next:head};

  //write as single linked list 

  // head= {value:5,
  //   next:{value:10,
  //     next:{
  //       value:50,
  //       next:{
  //         value:3,
  //         next:{
  //           value:1,
  //           next:null
  //         }
  //       }
  //     }
  //   }  
  //   };

  //   //node2={value:15,next: null};

  //nodeMiddle ={value:3,next:null};
  //console.log(head);




  // let name ="John";
  // function sayHi(){
  //   console.log("Hi " +name);

  // }
  // name="Pete";
  // sayHi();

  // function makeWorker() {
  //   let name = "John";
  //     return function() {
  //     console.log(name);
  //   };
  //   }
  //   let name = "Pete";
    
  //   let work = makeWorker();
 
  //   work();


  // function foo(){
  //   console.log(this);
  // }
  // const bob = {
  //   log:function(){
  //     console.log(this);
  //   }
  // };
  // console.log(this);
  // foo();
  // bob.log();


//   function myOwnReduce(arr, fun) {
//     let result = null;
//     for (let item of arr) {
//         result = fun(prev, item);
//     }
//     return result;
// }

// function sayHi() {
//   console.log('Hello');
//   return function(){
//     console.log("Bye")
//   };
//  }
//  setTimeout(sayHi(), 2000);




// let x=1;
// function foo(){
//   let y=2;
//   function bar(){
//     let z= 3;
  
//     function baz(){
//       console.log(z)
//       console.log(y)
//       console.log(x)
//       console.log(w)
//     }
//     baz()
//   }
//   bar()
// }
// foo();

// function sayHiBye(firstName, lastName) {

//   // helper nested function to use below
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log( "Hello, " + getFullName() );
//   console.log( "Bye, " + getFullName() );

// }
// sayHiBye("kisa", "maek")



// const x= 50;
// function b(){
//   const x=40;
//   function a(x){
//     console.log(x)
//     console.log(y)
//   }
//   a(30)
//   const y=10
// }
// const y=20;
// b();

// let user = {
//   firstName: "John",
//  sayHi() {
//   console.log(this)
  
//   }
// };
// // console.log(this);
// // user.sayHi();
// let myU= user.sayHi();
// myU;



  //bind
  //setTimeout(user.sayHi.bind(user), 1000);

  //call with wrapper 
  //setTimeout(function(){user.sayHi.call(user)},1000)

  //apply with wrapper 
  //setTimeout(function(){user.sayHi.apply(user)},1000)

  

  // const me = {
  //   first: 'Tina',
  //   last: 'Xing', getFullName: function() {
  //   return this.first + ' ' + this.last; }
  //   }
  //   const log = function(height, weight) { // ‘this’ refers to the invoker
   
  //   console.log(this.getFullName() + height + "   " + weight); }

    //const logMe = log.bind(me, "180cm", "70kg ");
    //logMe();
    //logMe("180cm", "70kg "); // Tina Xing 180cm 70

     //log.call(me, '180cm', "70kg"); // Tina Xing 180cm 70kg  
    //                                 // Tina Xing 180cm 70kg 
    // log.bind(me, "180cm", "70kg")(); // Tina Xing 180cm 70kg
    // log.apply(me, ['180cm', '70kg']);                                     


// const abc = { name: "",
// log: function() {
// this.name = "Hello";
// console.log(this.name); //Hello
// const setFrench = (newname => this.name = newname); //inner function 
// setFrench("Bonjour");
// console.log(this.name); //Bonjour
// } 
// };
// abc.log();

// const abc = { 
//   name: "",
//   greet:function(){
//     this.salute ="hello";
//     console.log(this.salute);   // hello
//     const setFrench= function(newSalute){
//       this.salute=newSalute;
//     };
//     setFrench("Bonjour");
    
//     //console.log(this.salute)
//   }
// };
// abc.greet()


//"use strict";
// function area(){
//   console.log(this); //_______{ side: 5, area: [Function: area] }_____________________
//   return this.side * this.side;
//   }
//   const square1 = {side: 5, area: area};
//   console.log(square1.area()); //____25_____________________________
 
  //What will appear in the first console.log line if “use strict” 
  //is not commented out?


  //  "use strict";
  // function area(){
  // console.log(this);// ________window_____________________
  // console.log(this.side) // __________undefined____________________________
  // return this.side * this.side;
  // }
  // const square1 = {side: 5, area: area};
  // console.log(area()); //___________Nan____________________



// function sayHi() { 
//   console.log('Hello');
// }
// setTimeout(sayHi, 2000);

// let company = {
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }], development: {
//   sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
//   internals: [{name: 'Jack', salary: 1300}] }
//   };

//   function sumSalaries(department) {
//     if (Array.isArray(department)) { // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array 
//   } else { // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//     sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results }
//     return sum; 
//   }
//   }
// }
//   console.log(sumSalaries(company))


 
// let e = 10,
//  a = 1,
//  b = 2,
//  c = 3,
//  d = 4;
 
// function sum() {
//  return function() {
//  return function() {
//  // outer functions scope
//  return function() {
//  // local scope
//  return a + b + c + d + e;
//  }
//  }
//  }
// }
// console.log(sum()()()());

// function isPalindrome(str){
//   if(str === "" || str.length === 1){
//     return true;
//    }else if(str[0]!==str[str.length-1]){
//   return false;
//    }else{
//   return isPalindrome(str.substring(1,str.length-1))
//    }
//   }
//   console.log(isPalindrome('m'))
//   console.log(isPalindrome(''))
//   console.log(isPalindrome('maam'))
//   console.log(isPalindrome('dabcbad'))
//   console.log(isPalindrome('jusjus'))

// function isPalindrome(str) {
//   let len = str.length;
//   str = str.toLowerCase();

//   for (let i = 0; i < len / 2; i++) {
//       if (str.charAt(i) !== str.charAt(len - 1 - i)) { 
//           // chech char towards charAt(0)
//           return false;
//       }
//   }
//   return true;
// }

// //let myStr = "madaM";
// console.log(isPalindrome("madaM"));
// console.log(isPalindrome("KisAnet"));



// function sayHi() {
//   console.log("Hello");
//   return function () {
//       console.log("bye");
//   }
// }

// immidately ------Hello--------
    // after two second-------bye---------
    // after 2000 seconds--------nothing----------
    //setTimeout(sayHi(), 2000);
    // immidately ------Hello--------
    // after two second-------bye---------
    // after 2000 seconds--------bye----------
    // let exam ={
    // student1: [{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "b", key: "b" }], //4-4+4 =4
    // student2:[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "", key: "b" }] //4-4-1=-1
    // };

    // function checkExam(exam){
    //   let score=0;
    //   for(let item of exam){
  
    //     if(item.answer === item.key){
    //       score+=4;
    //     }
    //     else if(item.answer === ""){
    //       score-=1
    //     }
    //     else{
    //       score-=4
    //     }
      
    // }
    //   return score;
    // }
    // console.log(checkExam(exam.student2))


//    function power(exponent){
//      return function(value){
//        return Math.pow(value,exponent);
//      }
//    }
// let array = [-1, 1, 2, -2, -1, 3]
// let returnVal = array.map(power(3));
// console.log(returnVal); 

// let node ={
//   credit:1,
//   next :{
//     credit:2,
//     next:{
//       credit:3,
//       next:null
//     }
//   }
// };

// function doubleUp(node){
//   node.credit= node.credit*2;
// }
// if(node.next){
//   doubleUp(node.credit);
// }
// console.log(node);

// let node3 = {
//   name: "p",
//   value: "This is text in the a paragraph",
//   children: null
//    };
//   let node4 = {
//   name: "label",
//   value: "Name",
//   children: null
//    };
//   let node5 = {
//   name: "input",
//   value: "this was typed by a user",
//   children: null
//    };
//   let node2 = {
//   name: "div",
//   value: "null",
//   children: [node4, node5]
//    };
//   let node1 = {
//   name: "body",
//   children: [node2, node3],
//   value: "null",
//    };
//   //find the longest value in the tree so compare the length of each value.length then return the longest one!!
//   function printNameValue(node){
//   //console.log(node.name,' ',node.value)
//   let longestN=node.value.length;
//   let resu=""
//   if(node.children === null){
//     return null
//   }
//   else{
//   for(let ele of node.children){
//   if(ele.value.length>longestN){
//   longestN=ele.value.length
//   resu=ele.value
//    }
//   printNameValue(ele)
//    }
//    }
//   return resu;
//    }
//   let x=printNameValue(node1)
//   console.log(x)
    

//"use strict";
// let list = {​​​​​​​​
// value: 3,
// next: {​​​​​​​​
// value: 2,
// next: {​​​​​​​​
// value: 6,
// next: {​​​​​​​​
// value: 6,
// next: {​​​​​​​​
// value: null
//  }​​​​​​​​
//  }​​​​​​​​
//  }​​​​​​​​
//  }​​​​​​​​
// }​​​​​​​​;
// function countTargetNodes(list, target) {​​​​​​​​
// let temp = list;
// let count = 0;
// while (temp) {​​​​​​​​
// if (temp.value === target) {​​​​​​​​

// count++;
//  }​​​​​​​​
// temp = temp.next;
//  }​​​​​​​​
// return count;
// }​​​​​​​​

// console.log(countTargetNodes(list, 6));


//Write a recursive function, printReverse, which takes a node as a parameter. Print all
//the values of LinkedList in reverse order. Assume the following node structure:

// let node={
//   city : "Fairfield",
// state : "IA",
// next : null
// }
// function printReverse(node) {
//   if (node.next) {
//   printReverse(node.next)
//   }
//  return node.city;
//   }

// let node3 ={
//   value: "c",
//   next:null
// };

// let node2= {
//   value: "b",
//   next:node3
// };

// let node1 ={
//   value:"a",
//   next:node2
//   };

//   let node5={value: "ab", 
//   next:node2
// }; 
//   node1.next = node5
//   node5.next= node2;
//   console.log(JSON.stringify(node1));
  
// function makeContact(){
//   let contactArr=[];
//   return function myContact(name,phone){
//     for(let i=0; i<name.length; i++ )
//     if(name[])

//   }
// }

// }
    // function tenClock(){
    //     const date = new Date();
    //     console.log(date)
      

    // }
    // let timerid=setInterval(tenClock ,1000);
    // clearInterval(timerid)
    // // repeat with the interval of 2 seconds
    // //let timerId = setInterval(() => alert('tick'), 2000);
    
    // // after 5 seconds stop
    // setTimeout(() => { clearInterval(timerid); console.log('stop'); }, 1000);



          //  function render() {
          //   let date = new Date();
    
    //         let hours = date.getHours();
    //         if (hours < 10) hours = '0' + hours;
    
    //         let mins = date.getMinutes();
    //         if (mins < 10) mins = '0' + mins;
     
    //         let secs = date.getSeconds();
    //         if (secs < 10) secs = '0' + secs;
     
      
     
    //         let output = template
    //           .replace('h', hours)
    //           .replace('m', mins)
    //           .replace('s', secs);
     
      
     
    //         console.log(output);
    //       }
     
      
     
    //       this.stop = function() {
    //         clearInterval(timer);
    //       };
     
      
     
    //       this.start = function() {
    //         render();
    //         timer = setInterval(render, 1000);
    //       };
        
    // let clock = new Clock({
    //   template: 'h:m:s'
    // });
    // clock.start();
    //  setTimeout(clock.stop, 3000);

    // function makeAccount(){
    //   let balance=0
    //   return function(operator, amount){
    //     if(operator === "add"){
    //       balance+=amount;
    //     }
    //     else if(operator === "debit"){
    //       balance-=amount;
    //     }
    //     return balance;
    //   }
    // }
    // const account1=makeAccount();
    // console.log(account1("add",10));
    // console.log(account1("add",10));
    // console.log(account1("add",5));
    // console.log(account1("debit",3));

    // let arr = [33, 12, 55, 88];
    // let smallest = Math.min(...arr);
    // console.log(smallest);
    // let node4 = { name: "label", children: null };
    // let node5 = { name: "input", children: null };
    // let node3 = { name: "p", children: null };
    // let node2 = { name: "dv", children: [node4, node5] };
    // let node1 = { name: "body", children: [node2, node3] };
    
    
    // function classAdder(node) {
    //     node.classNode = "classNode";
    //     if (node.children === null) {
    //         /*do nothing*/
    //         return;
    //     } else {
    //         /* go throgh the children*/
    //         for (let child of node.children) {
    //             classAdder(child);
    //         }
    //     }
    // }
    
    // classAdder(node1)
    // console.log(node1);

  //   function sumTo(num) {
  //     if (num === 0) return 0;
  
  //     else {
  //         return num + sumTo(num - 1);
  //     }
  // }
  
  // console.log(sumTo(10));


  //write your own version of Array.find. write a function myFind takes two arguments
//an array and function to apply the array
//example, array = [5, 11, 1, 33];
//console.log(myFind(arr, element => element > 10));

// function finder(num){
//   return num>10
// }

// function myFind(arr,cbk){
// for(let element of arr){
//   if(cbk(element)){
//     return element
//   }
  
// }
// return -1
// }

// let john = { name: "john", surname: "smith", age: 20 };
// let pete = { name: "pete", surname: "hunt", age: 18 };
// let danny = { name: "danny", surname: "hunt", age: 22 };

// let people = [john, pete];


// function getYoungerAge(array) {

//     let result = array.reduce((previous, current) => previous < current.age ? previous : current.age +" "+ current.name);
//     return result;
// }
// console.log(getYoungerAge(people));


// let john = { name: "john", surname: "smith", age: 20 };
// let pete = { name: "pete", surname: "hunt", age: 20 };

// let people = [john, pete];
// let mapped = people.map((user, idx) => ({
//     fullName: `${user.name} ${user.surname}`,
//     age: `${user.age}`,
//     id: `${idx + 1}`
// }));
// //map(function(item, index, array)) , we can get id from index
// console.log(mapped);

//TODO - OUTPUT
/*
[
  { fullName: 'john smith', age: '20', id: '1' },
  { fullName: 'pete hunt', age: '20', id: '2' }
]
*/



//  let usersMapped = users.map(user => ({
//      fullName: `${user.name} ${user.surname}`,
//     age: user.age
//  }));
/*
[
    '{ FullName: john  smith,  id: 1}',
    '{ FullName: pete  hunt,  id: 2}'
]
*/

// console.log(usersMapped)

// "use strict";
// function perimeter() {
//   console.log(this); //-----------------------------------------
//   return 4 * this.side;
// }

//  const shape = { side: 5, perimeter: perimeter };
//  console.log(shape.perimeter()); //-------------------------------------
// //TODO -- output -- 20

//NB:if we console.log(shape.perimeter()); --> we'll get 20
//perimeter();


//"use strict";

// function perimeter() {
//     console.log(this);   //    
//     return 4 * this.side;  // 
// }

// const shape = { side: 5, perimeter: perimeter };
// shape.perimeter();
//console.log(shape.perimeter())
//TODO -- output -- { side: 5, perimeter: [Function: perimeter] }

//NB:if we console.log(shape.perimeter()); --> we'll get 20



//"use strict";
// function perimeter(){
//  console.log(this);
//  return 4 * this.side;}
//  const shape = {side: 5, perimeter: perimeter};
//  //shape.perimeter();

// const myPerim = shape.perimeter;
// myPerim();


// function sayHi() {
//   console.log('Hello');
//   return function(){console.log("Bye")};
//  }
//  setTimeout(sayHi(), 2000);


// "use strict"
// function perimeter() {
//   console.log(this); //-----------------------------------------
//   return 4 * this.side;
// }

// const shape = { side: 5, perimeter: perimeter };
//console.log(shape.perimeter()); //------------------------------------
// //TODO -- output -- 20

//NB:if we console.log(shape.perimeter()); --> we'll get 20
//perimeter();





// "use strict";

// function perimeter() {
//     console.log(this);  // 
//     return 4 * this.side;
// }

// const shape = { side: 5, perimeter: perimeter };
// perimeter();
//TODO -- output -- { side: 5, perimeter: [Function: perimeter] }

//NB:if we console.log(shape.perimeter()); --> we'll get 20

// animal has methods
// let animal = {
//   walk: function() {
//   if (!this.isSleeping) {
//   console.log(`I walk`);
//   }
//   },
//   sleep: function() {
//   this.isSleeping = true;
//   }
//   };
//   let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
//   };
//   // modifies rabbit.isSleeping
//   rabbit.sleep();
//   console.log(rabbit.isSleeping); // true
//   console.log(animal.isSleeping); // undefined (no such property in the prototype)

//pockets → bed → table → head.

// let head = {
//   glasses: 1
//   };
//   let table = {
//   pen: 3,
//   __proto__: head
//   };
//   let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
//   };
//   let pockets = {
//   money: 2000,
//   __proto__: bed
//   };

//   console.log("expect 3: ", pockets.pen);
//   console.log("expect 1: ", bed.glasses);

// function Player(name, age) {
//   this.age = age;
//   this.name = name;
// }
// Player.prototype.play = function() {
//   return this.name + ' is playing';
// }
//fred = new Player("Fred", 12);
// console.log( fred.age === 12); // ____________________
// console.log(fred.__proto__.age === 12); //____________________
//console.log(Player.__proto__.name === "Fred"); //____________________
 //console.log(Player.prototype.play() === "Fred is playing"); //________________
 //console.log(fred.play() === "Fred is playing");// ____________________
 //pete = new Player("Pete", 15);
 //console.log(Player.prototype.name === "Pete"); //____________________
 //console.log(pete.__proto__ === fred.__proto__);// ____________________




// Player.prototype.play = function() {
//   console.log(this.name + ' is playing');
// }
//console.log(fred.play() === undefined);// ___true ________________




// function Person(name) {
//   console.log('Person1 this: ', this); //________________________
//   this.name = name;
//   console.log('Person2 this: ', this); //________________________
// }
// function Doctor(name, department) {
//   console.log( this); //________________________
//   Person.call(this, name, department);
//   console.log(this); // ________________________
//   this.dept = department;
// }
// Doctor.prototype.report = function() {
//   return "medical report"
// };
// function Surgeon(name, department) {
//   console.log(this); //________________________
//   Doctor.call(this, name, department);
//   console.log(this); //________________________
// }
// Surgeon.prototype.operate = function() {
//   return 'operation performed.'
// };
// Surgeon.prototype.__proto__ = Doctor.prototype;
// surg1 = new Surgeon("Fred", "Cardiology");
// console.log(surg1.dept); //________________________
// console.log(surg1.name); //________________________
// console.log(surg1.report());// ________________________
// console.log(surg1); //________________________
// console.log(surg1.__proto__); //________________________
// console.log(surg1.prototype); //________________________
// console.log(Surgeon.__proto__); //________________________
// console.log(Surgeon.prototype); //________________________
// console.log(Surgeon.prototype.__proto__); //________________________





// let animal = {name: 'default'}
// function Bird(name, age) {
// this.age = age;
// this.name = name;
// }
// Bird.prototype.fly = function() {
// return this.name + ' `is flying';
// } 
// peetee = new Bird("Peetee", 12);
//console.log("true: " + (peetee.age === 12));
 //console.log("false: " + (peetee.__proto__.age === 12));
 //console.log("false: " + (Bird.__proto__.name === "Peetee"));
 //console.log("false: " + (Bird.prototype.fly() === "Peetee is flying"));
 //console.log("true: " + (peetee.fly() === "Peetee is flying"));


// Bird.prototype = animal;

// polly = new Bird("Peetee");
//peetee = new Bird("Peetee", 12);

// console.log("false: " + (Bird.prototype.name === "Peetee"));
// console.log("false: " + (polly.__proto__ === peetee.__proto__));

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// };
// let fluf1= new Rabbit("Fluffy");

 //fluf1.sayHi();
 //Rabbit.prototype.sayHi();
// fluf1.__proto__.sayHi();




//"use strict";
// function area (){

//   console.log(this);  // object 
//   return this.side * this.side; 
// }
// const square1 = {side:5, area:area}
//console.log(square1.area());  //25



 //"use strict";
// function area (){
//   console.log(this);  // window 
//   console.log(this.side);  // undefined
//   return this.side * this.side
// }
// const square1= {side:5, area:area}

// console.log(area());  // NaN


// "use strict";
//  function area (){
//   console.log(this);  // window
//    return 3.14 * this.radius * this.radius;  

//  }

 //const circle ={radius:1, area:area}
//circle.area();

// let person = {
//   name: 'Jim',
//   sayName: () => {
//     console.log(this.name);
//   }
// };

// person.sayName();

/*
Doctor, patient (fname, lname, age)
patient (address)
doctors(branch)
      - surgeon => doTheSurgery()
      - physician  => makeTheTreatment()
*/


// class Person {
//   constructor(fname,lname,age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age= age;
//   }}
//   class Patient extends Person{
//     constructor(fname,lname,age,address){
//       super(fname,lname,age);
//       this.address = address;
//     }
//   }

//   class Doctor extends Person{
//     constructor(fname,lname,age,branch){
//       super(fname,lname,age);
//       this.branch = branch;
//     }
//   }
//   class Surgeon extends Doctor {
//     constructor (fname,lname,age,branch){
//       super(fname,lname,age);
//       this.branch = branch;
//     }
//     doTheSurgery(){

//     }
//   }
//   class Physician extends Doctor {
//     constructor (fname,lname,age,branch){
//       super(fname,lname,age);
//       this.branch = branch;

//     }
//     makeTheTreatment(){

//     }
//   }

// function Dog(name){
//   this.name = name;
//   this.walk = function(){
//   console.log(this.name + ' is walking . . ');
//   }
//   }
//   let myDog = Dog('Candy');
//   myDog.walk();


// function isPalindrome(str){
//   for(let i = 0; i<str.length/2 ; i++){
//     if(str[i] === str[str.length - 1 - i]){
//       return true;
//     }
//     return false;
//   }
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("kisanet"));


// function isPali(str){
//   if(str === "" || str.length === 0){
//     return true;
//   }
//   else if( str[0] !== str[str.length -1]){
//     return false;
//   }
//   return isPali(str.substring(1 , str.length - 1));
// }
// console.log(isPali("madam"));
// console.log(isPali("kisanet"));


// function checkExam(exam){
//   let score =0;
// for(let element of exam){
//   if(element.answer === element.key){
//     score+=4;
//   }
//   else if(element.answer === ""){
//     score-=1;
//   }
//   else{
//     score-=4;
//   }
// }
// return score;
// }


// function makeWithdraw(){
// let account=[];
// return function (name,amount){
//   for(let i=0; i<account.length;i++){
//     if(account[i].name === name){
//       if(account[i].checkingBalance >= account){
//         account[i].checkingBalance -=amount;
//       }
//       else{
//         if((account[i].savingBalance + account[i].checkingBalance>amount)){
//           account[i].checkingBalance =0;
//           amount-= account[i].checkingBalance;
//           account[i].savingBalance-=amount;
//         }
//         else{
//           return "earn money"
//         }
//       }
//     }
//   }

// }

// }


// function MakeAccont(){
//   let balance = 0;
//   this.withdraw= function (amount){
//     balance-=amount;
//   }
//   this.deposit = function (amount){
//     balance+=amount
//   }
//   this.balance= function(){
//     return balance;
//   }

// }
// const acc= new MakeAccont();
//   acc.deposit(120);
//   acc.withdraw(50);
//   console.log(acc.balance());

// class MakeAccont{
//   constructor(){
//     this.balance=0;
//   }
//     withdraw (amount){
//       return this.balance = this.balance - amount;
//     }
//     deposit (amount){
//       return this.balance = this.balance + amount;
//     }
//     balance(){
//       return this.balance;
//     }
  
//   }

//   const acc = new MakeAccont();
//   acc.deposit(190);
//   acc.withdraw(40)
//   console.log(acc.balance);


// let arr = [1,2,3,4,5]
// function cbk(item, current){
//   return item * current;
// }

// const pro = arr.reduce(cbk);

// console.log(pro);


// function myReduce(arr, cbk, ini){
//   let tot = ini;
//   for(let ele of arr){
//     tot = cbk(tot,ele)
//   }
//   return tot;
// }





// let animal = {name: 'default'}
// function Bird(name, age) {
// this.age = age;
// this.name = name;
// }
// Bird.prototype.fly = function() {
// return this.name + ' is flying';
// }
// peetee = new Bird("Peetee", 12);
// console.log("1" + (peetee.age === 12));
// console.log("2" +  (peetee.__proto__.age === 12));
// console.log("3" +  (Bird.__proto__.name === "Peetee"));
// console.log("4" +  (Bird.prototype.fly() === "Peetee is flying"));
// console.log("5" + (peetee.fly() === "Peetee is flying"));

// Bird.prototype = animal;
// polly = new Bird("Polly");
// console.log("6" + (Bird.prototype.name === "Peetee"));
// console.log("7" +(polly.__proto__ === peetee.__proto__));


/*
 1. true
 2. false
 3. false
 4. false
 5. false 
 6. false
 7. false
 */


//  function User(name) {
//   this.name = name;
// }
// User.prototype.sayHi = function() {
//   console.log(this.name);
// };
// let user = new User("John");
// user.sayHi();

// class User{
// constructor(name){
// this.name= name;
// }
// sayHi(){
// console.log(this.name)

// }
// }
// let user = new User("John");

// user.sayHi();

// let animal = {
//   eats: true
//   };
//   function Rabbit(name) {
//   this.name = name;
//   }
//   Rabbit.prototype = animal;
//   let rabbit = new Rabbit("White Rabbit"); //rabbit.__proto__ == animal
//   console.log( rabbit.eats ); // true

// function Animal() {
//     this.eats = true
// };

// function Rabbit(name) {
//     Animal.call(this)
//     this.name = name;
// }

// Rabbit.prototype = Animal.prototype;
// let rabbit = new Rabbit("White Rabbit");
//console.log("1" + rabbit.eats);
//console.log("2" + rabbit)
 //console.log( Animal.prototype)
  //console.log(Animal.prototype.constructor)
 //console.log("5" + Rabbit.prototype)
 //console.log("6" + Rabbit.prototype.constructor)

//  function Person(name) {
//   console.log('Person1 this: ', this); //____Surgeon {}____________________
//   this.name = name;
//   console.log('Person2 this: ', this); //________Surgeon {name:Fred}________________
// }
// function Doctor(name, department) {
//   console.log( this); // _____Surgeon {}___________________
//   Person.call(this, name, department);
//   console.log(this); // __Surgeon {name:Fred}______________________
//   this.dept = department;
// }
// Doctor.prototype.report = function() {
//   return "medical report"
// };
// function Surgeon(name, department) {
//   console.log(this); //__Surgeon{}______________________
//   Doctor.call(this, name, department);
//   console.log(this); //______Surgeon {name:Fred, department:Card}___________________
// }
// Surgeon.prototype.operate = function() {
//   return 'operation performed.'
// };
// Surgeon.prototype.__proto__ = Doctor.prototype;
// surg1 = new Surgeon("Fred", "Cardiology");
// // console.log(surg1.dept); //_____Cardiology___________________
//  console.log(surg1.name); //_____Fred___________________
// // console.log(surg1.report());// ____medical report____________________
//  //console.log(surg1); //_______Surgeon {name: Fred, department: Cardiolgy_________________
//  console.log(surg1.__proto__); //_Doctor.prototype_______________________
// console.log(surg1.prototype); //____undefined____________________
// console.log(Surgeon.__proto__); //___undefined_____________________
// console.log(Surgeon.prototype); //__Doctor. prototype______________________
// console.log(Surgeon.prototype.__proto__); //______Doctor.prototype__________________

// function Player(name, age) {
//   this.age = age;
//   this.name = name;
//  }
//  Player.prototype.play = function() {
//   return this.name + ' is playing';
//  }
//  fred = new Player("Fred", 12);
//  console.log(fred.age === 12); //____true________________
//  console.log(fred.__proto__.age === 12);// __false__________________
//  console.log( Player.__proto__.name === "Fred"); // __false__________________
//  console.log( Player.prototype.play() === "Fred is playing"); //____false____________
//  console.log( fred.play() === "Fred is playing"); //____true________________
//  pete = new Player("Pete", 15);
//  console.log(Player.prototype.name === "Pete"); //_________false___________
//  console.log(pete.__proto__ === fred.__proto__); //________true____________

// function User(name){
//   console.log("1:" , this); // {}
//   this.name = name;
//   console.log("2:" , this); // {name:Rujuan}      {name:Tina}
//   }
//   tina = {};
//   const thisUser = User.bind(tina);
//   thisUser("Rujuan");
//   thisUser("Tina");
//   console.log("3: ", tina);   // {name:Tina}



// class User{
//   constructor(name){
//     this.name= name;
//   }
//   sayHi(){
//     console.log(this.name);
//   }
// }
// let user= new User("John");
// user.sayHi();

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// };
// let fluf1= new Rabbit("Fluffy");

 

// //Do all of these calls do the same thing?  (Draw the object diagram - on scratch paper)
// fluf1.sayHi();
//  Rabbit.prototype.sayHi();
//  console.log(fluf1.sayHi() === "Fluffy");

// class Counter{
//   constructor(){
//     this.count= 0;
//   }
//   up(){
//     return ++ this.count ;
//   }
//   down (){
//     return  -- this.count;
//   }

// }
// let counter= new Counter()
//   console.log(counter.up());
//   console.log(counter.up());
//   console.log(counter.down());

// class Student{
//   constructor(students,key){
//   this.students=students;
//   this.key=key
//   }
//   answerComparator(ans1, ans2) {
//   return ans1.qid - ans2.qid;
//   }
//   scoreStudent(id) {
//   let stu=this.getStudent(id)
//   let stuAnswer = stu.answers.sort(this.answerComparator);
//   let score = 0;
//   for (let i = 0; i < stuAnswer.length; i++) {
//   if (stuAnswer[i].ans === this.key[i].ans) score++;
//   }
//   return score;
//   };
//   getStudent(id){
//   return this.students.find((item) => item.sid === id);
//   }
//   getAverage() {
//   let totalScore=0;
//   let totalStudent=Object.values(this.students).length
//   for(let stu of this.students){
//   totalScore+=this.scoreStudent(stu.sid)
//   }
//   return (totalScore/totalStudent)
//   };
//   }
//   students = [
//   {
//   sid: 10,
//   answers: [
//   { qid: 2, ans: "b" },
//   { qid: 3, ans: "a" },
//   { qid: 1, ans: "b" },
//   ],
//   },
//   {
//   sid: 11,
//   answers: [
//   { qid: 1, ans: "e" },
//   { qid: 2, ans: "a" },
//   { qid: 3, ans: "b" },
//   ],
//   },
//   {
//   sid: 12,
//   answers: [
//   { qid: 3, ans: "b" },
//   { qid: 2, ans: "a" },
//   { qid: 1, ans: "d" },
//   ],
//   },
//   ];
//   key = [
//   { qid: 1, ans: "b" },
//   { qid: 2, ans: "a" },
//   { qid: 3, ans: "b" },
//   ];
//   let gradeStudent=new Student(students,key)
//   console.log(gradeStudent.scoreStudent(11))
//   console.log(gradeStudent.getAverage())

// let snoopy = Object.create(animal)
//snoopy.name("Soopy");

// let snoopy ={
//   name: name,
//   __proto__:animal

// }


// class User {
//   constructor (name){
//     this.name = name;
//   }
//   sayHi(){
//    console.log (this.name);
//   }
// }
// let user = new User("John");


// class Counter {
//   constructor (){
//     this.count=0;
//   }
//   up(){
//     return ++ this.count;
//   }
//   down (){
// return -- this.count;
//   }
// }

// let animal = {
//   eats: true
//   };

// let snoopy ={
 
//   __proto__ :animal
// }
// console.log(snoopy.eats);


    

// function Rabbit (name) {​​​​​​​​
// this.name = name;
//   }​​​​​​​​
// Rabbit.prototype.sayHi = function() {​​​​​​​​
// console.log(this.name);
//   }​​​​​​​​;
// let fluf1= new Rabbit("Fluffy");

//Do all of these calls do the same thing?  (Draw the object diagram - on scratch paper)
//fluf1.sayHi();
 //Rabbit.prototype.sayHi();
// fluf1.__proto__.sayHi();

let animal = {name: 'default'}
function Bird(name, age) {
this.age = age;
this.name = name;
}
Bird.prototype.fly = function() {
return this.name + ' is flying';
}
Bird.prototype = animal;
polly = new Bird("Polly");
//console.log("false: " + (Bird.prototype.name === "Peetee"));
console.log("false: " + (polly.__proto__));