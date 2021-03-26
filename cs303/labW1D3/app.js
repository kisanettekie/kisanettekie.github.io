"use strict"
//module.exports={Accumulator,Calculator}
/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){

this.currentValue = initialValue,
this.increment=increment,
this.accumulate = function(){
   this.currentValue += increment
   return this.currentValue

}, 
this.report= function(){
   return this.currentValue
}
}


/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator(a,b) {
   
this.a = a,
this.b = b,
this.sum = function(){
return this.a + this.b
     },
     this.mul=function(){
        return this.a * this.b
     }

   }