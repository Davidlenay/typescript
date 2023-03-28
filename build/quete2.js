"use strict";
class Personn {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.log(`I am ${this.name}`);
    }
    tellMyAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const personn1 = new Personn("John", 40);
const personn2 = new Personn("Mary", 35);
personn1.tellMyName();
personn1.tellMyAge();
personn2.tellMyName();
personn2.tellMyAge();
