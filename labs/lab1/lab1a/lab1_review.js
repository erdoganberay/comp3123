let variableLocal = 200
var variableglobal = 100
variableglobal = "hello"
console.log(variableglobal)

//Prototype: one-time used object created from the 
//prototype called Object
const newObject = {
	prop1: "Beray Erdogan",
	prop2: "COMP3123",
	method1: function (param1){
		console.log(param1)
	}
}

console.log(newObject)
console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.method1("pizza")

//Prototype: constructor 
function Student(student_name, course, lunch){
	this.prop1 = student_name
	this.prop2 = course
	this.prop3 = lunch

	this.method1 = function (param1){
		console.log(param1)
	}
}

const student_morning = new Student("Beray", "COMP3123", "Burger")

console.log(student_morning)
console.log(student_morning.prop1)
console.log(student_morning.prop2)
student_morning.method1(student_morning.prop3)

//Optional Homework: Instatiate another student object and print values
// Prototypes: Add a method AFTER/IN ANOTHER FILE
// to give more capabilities to this prototype

Student.prototype.prop4 = "hardcoded-value"
Student.prototype.method2 = function (param1){
	return param1
}

console.log(student_morning.prop4)
console.log(student_morning.method2("chow mein"))

// Class
class Prof {
	constructor (prof_name_p, ){
		this.prof_name = prof_name_p

	}
	method1 (){
		return param1
	}

}

const morning_prof = new Prof("Laily")
console.log(morning_prof)

//Optional Homework: Call morning_prof'S method and directly print its property
