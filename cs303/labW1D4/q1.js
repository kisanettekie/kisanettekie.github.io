'use strict';

const prompt= require('prompt-sync')();


 let user;
 let user2;


do{
    user= + prompt ("enter a number ");
    user2= + prompt ("enter a number ");

}while(isNaN(user))
let sum= user + user2;
sum=sum +"";
let firstElement= sum.charAt(0);
console.log(firstElement);











