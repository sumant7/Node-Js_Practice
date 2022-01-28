const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}   //EventEmitter is a class in Js.All objects that emit events are instances of the EventEmitter class

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('Turn off the motor!');
  setTimeout(()=>{
      console.log("Close The Tap")
  },3000);
});
console.log("check1")
myEmitter.emit('waterfull');    //triggers the event
console.log("check2")




//read at https://nodejs.org/api/events.html