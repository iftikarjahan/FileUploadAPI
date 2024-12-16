// OOPS In Javascript

// 1. Constructor Functions

const Person=function(firstName,age){ 
    this.firstName=firstName;
    this.age=age;
}

Person.prototype.calcHeight=function(x){
    return this.age*x;
}
const Iftikar=new Person("Iftikar",24);
const Juwell=new Person("Juwell",18);

const iftikarHeight=Iftikar.calcHeight(2);
console.log(iftikarHeight);

// checks
console.log(Iftikar.__proto__==Person.prototype);  //true
console.log(Person.prototype.isPrototypeOf(Iftikar));   //true
console.log(Person.prototype.isPrototypeOf(Juwell));   //true
console.log(Person.prototype.isPrototypeOf(Person));   //false
console.log(typeof(Person.prototype)); //object
console.log(Person.prototype); //object
console.log(Person.prototype.constructor); //object




