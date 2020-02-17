alert("Hello alert!");

document.write("hello document!");

console.log("hello console!");

// comment

var y = 2;
var x;
x = 5;

var myName = "Stijn";
typeof myName;

// function
var myFunc = function(){};

alert('My name is ' + myName);

var x = 5;
x++; //increment one

// === is equal value and type
// == machting same letters/numbers
var fruits = ["banana","mango"];
fruits.length;
fruits.push("orange");

//if else statement
var apples = 8;
if (apples > 0) {
	console.log("Eat An Apple");
} else {
	console.log("No apples left.");
}

// for (<counter> ; <counting to> ; <increment counter>) {
//	<expression>
// }
var x = "numbers: ";
for (var i = 0; i < 5; i++) {
	x += " " + i
}
console.log(x);

/*
var #name = funtion(#arguments) {
 for (var i = 0; i<list.length; i++) {
 	console.log(list[i]);
 };
};
*/

var fruits = ["Peach","Orange","Apple"];

var printList = function(list) {
	for (var i=0; i<list.length; i++) {
		console.log(list[i])
	};
};

printList(fruits)

var printList = function(list) {
	for (var i = 0; i<list.length; i++) {
		document.write(list[i]);
		document.write("<br>");
	};
};

printList(fruits);


var cars = ["VW","Audi","Jepp"];
var concatListFunc = function(list2,list1) {
 return list1.cocncat(list2);
}
document.write(printList(concatListFunc(fruits, cars)) );

var iceCreams = ["cookies&cream", "softcream","vanila"];

printList(cars);
printList(iceCreams);

var printList = function(list) {
	if (list.length < 3) {
		return "Not enough elements";
	}
	return list[0];
};

var returnedValue = printList(fruits);
document.write(returnedValue);


var printFruit = function() {
	var fruit = "Apple";
	document.write(fruit);
}

var printVeggie = function() {
	var veggie = "Cucumber";
	document.write(veggie)
}

printVeggie
printFruit

var car = {
	make: "Tesla",
	model: "Model S",
	acceleration: 30,
	accelerate: function(){
		this.accelerate += 10
	}
}

var favorite = "Tesla Model 5";

var person = {
	favorite: "Nissan Leaf",
	getFave: function() {
		return this.favorite;
	}
};

// parentheses for calling a function
document.write(person.getFave());
document.write("<br>");
// without parantheses ripping out the function out of the object
var fun = person.getFave;
// now with the parenthese aks for the function, apply it
document.write(fun());

var math = function(a,b,operate) {
	return operate(a,b);
}

