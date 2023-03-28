var Personn = /** @class */ (function () {
    function Personn(name, age) {
        this.name = name;
        this.age = age;
    }
    Personn.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Personn.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Personn;
}());
var personn1 = new Personn("John", 40);
var personn2 = new Personn("Mary", 35);
personn1.tellMyName();
personn1.tellMyAge();
personn2.tellMyName();
personn2.tellMyAge();
