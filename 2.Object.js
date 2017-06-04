// selfinvoking function

(function(name){
	console.log("selfinvoking   :"+name)
})("swan")



// Objects
var object = new Object();
console.log(object)

var object2 = {};

console.log(object2)

var obj3 = Object.create(null);
console.log(obj3)

function person(){

}

// function constructor
var obj4=new person()
console.log(obj4)

// different ways add property
var obj = {};

obj["name"]="Papa";
obj.city = "Hyderabad";
Object.defineProperty(obj,'sate',{
	value : 'TS'
})

delete obj.city;
console.log(obj);


// 1.preventExtensions()

/*we can't add new propety but we can delete and modify*/

var person1 = {name:"srinivas Papa",age:'25'}

Object.preventExtensions(person1);

person1.city="hyd";

person1.name="swan";

delete person1.age;
console.log(person1)

// 1.seal()

/*we can only modify but we can't add new propety and delete */

var person2 = {name:"sanjana",age:'22'}

Object.seal(person2);

person2.city="hyd";

person2.name="swan1";

delete person2.age;
console.log(person2)

// 1.freeze()

/*we can't do anything here */

var person3 = {name:"sanjana",age:'23'}

Object.freeze(person3);

person3.city="hyd";

person3.name="swan1";

delete person3.age;
console.log(person3)

// adding prpoerties and methods to object

var person = {
	firstName : 'scott',
	lastName : 'dwsattack',
	fullName : function(){
		return this.firstName+' '+this.lastName;
	}
}

var fullName = person.fullName();
console.log(fullName)


// keys and values from object

var customer = {
	name : "Roopa Biswal",
	city : "Bangulore",
	role : "developer",
	age : "22"

}

var keys = Object.keys(customer);
console.log(keys)

var values = Object.values(customer);
console.log(values)

function sayHello(){
	console.log("Hello world")
}

var msg = sayHello();
console.log(msg)

// ananumous function

var sayAgain = function(){
	return "hello pusha"
}
console.log(sayAgain())

// constructor function

function Person(firstName,lastName){
	this.firstName =  firstName
this.lastName =  lastName


}
// here full name willbe created only once even if created multiple objects created
Person.prototype.fullName = function(){
	return this.firstName+" "+this.lastName;
}

var newPerson1 = new Person("Papa","Srinivas");
var newPerson2 = new Person("swan","smith");
var newPerson3 = new Person("king","taaa");
console.log(newPerson1.fullName())
console.log(newPerson2.fullName())
console.log(newPerson3.fullName())




