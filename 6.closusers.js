function sayHello(message){
	return function(firstName,lastName){
		return message+" "+ firstName + " "+ lastName
	}
}

var sendWish = sayHello("closure");

console.log(sendWish);
console.log("hello");
console.log(sendWish("sree","papa"));
