var person1 = {name : "ByreGowda",age :24}
var person2 = {name : "SundarKrishna",age :34}

function sayHello(message,wish){
	console.log(this)
	return message + " "+this.name+" "+this.age+" "+wish;
}
// all 3 methods call,apply,bind will decide what is this value of that function 
var msg1 = sayHello.bind(person1)
console.log(msg1("Hello"))

var msg2 = sayHello.bind(person2)
console.log(msg2("Hello"))

var msg3 = sayHello.call(person2,"Hello","Be Happy")
console.log(msg3)

var msg4 = sayHello.apply(person1,["Hello","Be Happy"])
console.log(msg4)