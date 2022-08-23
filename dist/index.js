"use strict";
let num = 5;
let str = 'string';
let bool = true;
let anyData = 'Anything';
anyData = 5;
let arr = [1, 2, 3, 4];
let tupleData = [1, 'str', true];
let tupleArr = [[1, 'str'], [2, 'str']];
// Union 
// Different data types
let id = 22;
id = 'id_12';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
const user = { id: 12, name: ' Jon' };
const user2 = { id: 12, name: ' Jon' };
// Type Assertion
let uid = 1;
let userId = uid;
let userId2 = uid;
// functions
function add(x, y = 4) {
    return x + y;
}
console.log(add(3, 4));
const user1 = {
    id: 1,
    name: 'John',
};
const addNum = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
// strArray.push(1) // Throws error
