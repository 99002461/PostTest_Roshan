"use strict";

function Person(name, city, email, num) {
  this.name = name;
  this.city = city;
  this.email = email;
  this.num = num;

  this.printDetails = function () {
    console.log(name + " " + city);
  };
}

Person.prototype.greetMessage = function (message) {
  console.log(message + this.name);
};

Person.prototype.mobile = 9837373829;
module.exports = Person;