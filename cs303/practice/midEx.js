 function classAdder(node){
    //     if(node.child===null){
    //         node.class="classnode"
    //     }else{
    //         for(let chi of node.child){
    //             node.class="classnode"
    //         }return classAdder(node.child)
    //     }
    
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
    // setTimeout(() => { clearInterval(timerid); console.log('stop'); }, 10000);
    
    // let nod1={valu:1,next:{valu:2,next:{valu:6,next:null}}}
    // let nod5={valu:6,next:null};
    
    // nod5.next=nod1.next;
    // nod1.next=nod5
    // console.log(JSON.stringify(nod1))
    
    // let nod7={valu:7,next:null}
    // nod7.next=nod1.next.next
    // nod1.next.next=nod7
    // console.log(JSON.stringify(nod1))
    // let temp=nod1.next.next.next.next
    // nod1.next.next.next=temp;
    // temp.next=null;
    
    // console.log(JSON.stringify(nod1))
    
    
    // "use strict";
    
    
    // const shape = { side: 5, perimeter:function (){
    //     console.log(this);
    //     return 4 * this.side ;
        
    //     } };
    // shape.perimeter();
    
    // //what will appear in the console log? ...................................................
    // const myPerim = shape.perimeter;
    // myPerim();
    // console.log(myPerim)
    // //what will appear in the console log? .....................................................
    
    // //Now suppose that the "use strict" line is commented out.
    // myPerim();
    
    // //what will appear in the console log? ...
    // "use strict "
    
    // function area() {
    //         console.log(this);//window obj
    //         console.log(3.14 * this.radius * this.radius);//NaN
    //     }
    //     const circle = {
    //         radius: 2,
    //         area: area
    //     };
    //     console.log(circle.area())
        //setTimeout(circle.area, 1000);
    
    //     function render() {
    //         let date = new Date();
     
      
     
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
    //     }
    // }
    // let clock = new Clock({
    //   template: 'h:m:s'
    // });
    // clock.start();
    // setTimeout(clock.stop, 3000);
    
    
    
    // let john = {name: "John", surname:"Smith", age:"10"};
    
    // let pete = {name: "Pete", surname:"Hunt", age:"20"};
    
    // let people = [john, pete];
    // let temp=people.map((a)=>(`{fullName:${a.name} ${a.surname} age":"${a.age} }`))
    // console.log(temp)
    
    // let banana = {
    //     name: "banana",
    //     color: "yellow",
    //     price: 1
    // };
    // let apple = {
    //     name: "red delicious",
    //     color: "red",
    //     price: 2
    // };
     
    // let fruit = [banana, apple];
     
    // //Use the map function to map the users array to the following:
    // //  [
    // //     { fullName: "John Smith", id: 1 },
    // //     { fullName: "Pete Hunt", id: 2 },
    // // ]
     
    // //Hint: recall bracket versus dot notation
     
    // let fruitMapped = fruit.map(function (fruit) { return ({ fruitName: fruit.name, cost: fruit.price }) });
     
    // console.log(fruitMapped);
    
    /*7. Write your own version of Array.find. Write a function, myFind that takes 2 arguments, 
    an array and a function to apply to the array. It should work like Array.find i.e the input (callback) 
    function returns true or false for each element in the original array. It should return the first 
    element of the array for which the callback function returns true. It should not change the input array. For Example,
    
    const numArray = [5, 11, 1, 33];
    
    console.log(myFind(numArray, element => element > 10)) // 11 */
    function myfind(arr,calback){
        for(const n of arr){
           if( calback(n)){
               return n;
           }
        }
        return -1;
    }
    const numArray = [5, 11, 1, 33];
    let x=myfind(numArray, element => element > 10)
    console.log(x)
    
    /////////////////////////
    let n5 = {    type: "label",    children: null};
    let n4 = {    type: "input",    children: null};
    let n3 = {    type: "p",    children: null};
    let n2 = {    type: "div",    children: [n4, n5]};
    let n1 = {    type: "body",    children: [n2, n3],};
    
     
    
    
    function textAdder(node) {
      if (node.type === "input" || node.type === "p") { node.class = "text"};
      if (node.children === null) {
       /* do nothing */
       return;  //not required
      } else { //go through the children
        for (const child of node.children) {
          textAdder(child);
        }
      }
    }
    textAdder(n1);
    console.log(n3);
    console.log(n2);
    
    
    let node4 = {    name: "label",    children: null};
    let node5 = {    name: "input",    children: null};
    let node3 = {    name: "p",    children: null};
    let node2 = {    name: "div",    children: [node4, node5]};
    let node1 = {    name: "body",    children: [node2, node3],};
    
     
    
    // function classAddr(node) {
    //   node.classNode = "classNode";
    //   if (node.children === null) {
    //    /* do nothing */
    //    return;  //not required
    //   } else { //go through the children
    //     for (const child of node.children) {
    //       classAddr(child);
    //     }
    //   }
    // }
    // classAddr(node1);
    // console.log(node1);
    
    function tenClock() {
        let tickCount = 10;
        const watchID = setInterval(logTime, 1000);
      
       
      
        function logTime() {
          const currentTime = new Date();
          const hours = currentTime.getHours();
          const minutes = currentTime.getMinutes();
          const seconds = currentTime.getSeconds();
          console.log(hours + ":" + minutes + ":" + seconds);
          if (tickCount === 0) {
            clearInterval(watchID);
          } else {
            tickCount = tickCount - 1;
          }
        }
      }
      tenClock();