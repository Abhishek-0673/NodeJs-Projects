console.log("Starting app..!");

setTimeout(()=>{
    console.log("Inside of call back");
},2000);

console.log("Finishing Up..!");

setTimeout(()=>{
    console.log("No delay initiated!");
},0);