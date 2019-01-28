const square = x => x*x;
console.log(square(9));

const user = {
    name:'Abhishek s',
    sayHi:()=>{
        console.log(arguments);
    console.log(`Hi. I,m ${this.name}`);
    },
    sayHiAlt(){
        console.log(`Hi. I,m ${this.name}`);
    }
};
console.log(user.sayHiAlt());
