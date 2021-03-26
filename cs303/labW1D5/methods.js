"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { filterRangeInPlace, filterRange, Calculator, groupById, unique, }; //add all of your function names here that you need for the node mocha tests

//higher or equal to a and lower or equal to b
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
let ab= arr.filter(function(ele){ 
   return ele>=a && ele<=b  
})
return ab
}  
//console.log(filterRange(arr, 1, 4))

//a ≤ arr[i] ≤ b. // d/c map===changes arr & filter not


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  //let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4)


  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
console.log(groupById(users))

let mm =["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"]
      
function unique(arr){// 
    let empArr=[];
 arr.filter((ele) => {
        if(!empArr.includes(ele)) 
        empArr.push(ele)
    });
    return empArr;
}
console.log(unique(mm))