"use strict";
//Variables///
Object.defineProperty(exports, "__esModule", { value: true });
//string//
var scene = "Hello Ashique";
//number//
var userId = 1;
//better (because ts knows what is going on); 
var userId2 = 2;
//boolean//
var isLogged = false;
//any (Won't give any errors;not better to use)//
var myName = "Ashique";
myName = 10;
//function//
function addNum(num) {
    return num + 2;
}
;
//Default value in function.
var addUser = function (name, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
};
// function return value mention
var returnFunction = function (num) {
    return 2 + num;
};
//Here no need to mention type of val, because ts knows that because of arr is filled with numbers.
//but we can give return type  
var arr = [1, 2, 3];
arr.map(function (val) {
    return "".concat(val);
});
///If we dont want to return anything in a function
function err(error) {
    console.log(error);
}
//Also another thing never (nerver return anything,kind of void, but let see example);
function handleErr(err) {
    throw new Error(err);
}
//Giving obj as return type 
function course() {
    return {};
}
///Specifying what needs to return on obj
function newCorse() {
    return { name: 'ashique' };
}
// console.log(newCorse());
//Class//
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
;
var rollNumber = new Person('Muhammed', "Ashique");
console.log(rollNumber.getFullName());
